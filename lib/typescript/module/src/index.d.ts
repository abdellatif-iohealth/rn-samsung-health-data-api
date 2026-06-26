import type { HeartRateData, PermissionResult, SleepData, StepsData, ActiveTimeData, ActiveCaloriesData } from './results.types';
import type { HealthDataType, ReadRecordsOptions, TimeRangeFilter } from './records.types';
export declare function initializeHealthStore(): Promise<boolean>;
export declare function checkHealthPermissionsGranted(permissions: HealthDataType[]): Promise<PermissionResult>;
export declare function requestHealthPermissions(permissions: HealthDataType[]): Promise<PermissionResult>;
export declare function readStepData(option: ReadRecordsOptions): Promise<StepsData>;
export declare function readSleepData(filter: TimeRangeFilter): Promise<SleepData>;
export declare function readHeartRateData(option: ReadRecordsOptions): Promise<HeartRateData>;
export declare function readActiveTimeData(option: ReadRecordsOptions): Promise<ActiveTimeData>;
export declare function readActiveCaloriesData(option: ReadRecordsOptions): Promise<ActiveCaloriesData>;
export type { HeartRateData, PermissionResult, SleepData, StepsData, ActiveTimeData, ActiveCaloriesData, } from './results.types';
export type { HealthDataType, ReadRecordsOptions, TimeRangeFilter, } from './records.types';
//# sourceMappingURL=index.d.ts.map