import {
  IMonthWeightItem,
  IProductsDataSource,
  IResponseProductItem,
  TFactoryMonthWeight,
  TMappedProducts,
  TProductKeyName,
} from './ProductsDataSource.types';
import { HttpClient } from '../../../HttpClient';
import { ProductsStorage } from './storage/ProductsStorage';
import { formatKgToTons, normalizeDate } from '../../../../utils';

export class ProductsDataSource implements IProductsDataSource {
  private readonly _httpClient: HttpClient;
  private readonly _storage: ProductsStorage;

  constructor(httpClient: HttpClient, storage: ProductsStorage) {
    this._httpClient = httpClient;
    this._storage = storage;
  }

  async getData() {
    if (!this._storage.size || this._storage.isAllItemsEmpty())
      await this.fetchJson();

    return this._storage.data;
  }

  private async fetchJson() {
    const response: Array<IResponseProductItem> = await this._httpClient.get(
      '/products',
    );

    this.saveData(this.formatData(response));
  }

  private formatData(data: Array<IResponseProductItem>): TMappedProducts {
    const productsMap: TMappedProducts = new Map();

    for (let i = 1; i <= 2; i++) {
      const factoryItems = data
        .filter((item) => item.factory_id === i)
        .map((item) => ({
          ...item,
          date: item.date
            ? {
                string: normalizeDate(item.date).toISOString(),
                id: normalizeDate(item.date).getMonth() + 1,
              }
            : null,
        }))
        .filter((item) => !!item.date);

      const monthsWeight: TFactoryMonthWeight = {};

      for (let i = 1; i <= 12; i++) {
        const monthsWeightData: IMonthWeightItem = {
          product1: {
            kg: 0,
            ton: 0,
          },
          product2: {
            kg: 0,
            ton: 0,
          },
          product3: {
            kg: 0,
            ton: 0,
          },
          all: {
            kg: 0,
            ton: 0,
          },
        };

        factoryItems.forEach((item) => {
          if (item.date?.id === i) {
            if (typeof item.product1 === 'number') {
              monthsWeightData.product1.kg += item.product1;

              monthsWeightData.all.kg += item.product1;
            }

            if (typeof item.product2 === 'number') {
              monthsWeightData.product2.kg += item.product2;

              monthsWeightData.all.kg += item.product2;
            }

            if (typeof item.product3 === 'number') {
              monthsWeightData.product3.kg += item.product3;

              monthsWeightData.all.kg += item.product3;
            }
          }
        });

        Object.entries(monthsWeightData).forEach(
          ([key]: Array<TProductKeyName>) => {
            monthsWeightData[key].ton = formatKgToTons(
              monthsWeightData[key].kg,
            );
          },
        );

        monthsWeight[i] = monthsWeightData;
      }

      productsMap.set(i, { items: factoryItems, monthsWeight });
    }

    return productsMap;
  }

  private saveData(data: TMappedProducts) {
    this._storage.data = data;
  }
}
