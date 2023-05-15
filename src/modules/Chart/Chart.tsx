import { useMemo } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import { chartOptions } from './options';

const BaseChart = (props: HighchartsReact.Props) => {
  const { options, ...otherProps } = props;

  const mergedOptions = useMemo(
    () => ({ ...chartOptions, ...options }),
    [options],
  );

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={mergedOptions}
      {...otherProps}
    />
  );
};

export default BaseChart;
