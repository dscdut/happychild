import dayjs from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import 'antd/es/date-picker/style/index';
import generatePicker from 'antd/es/date-picker/generatePicker';
import weekday from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(weekday);
dayjs.extend(localeData);
export type Picker = 'date' | 'week' | 'month' | 'year' | 'time' | 'quarter';
export const DatePicker = generatePicker(dayjsGenerateConfig);
