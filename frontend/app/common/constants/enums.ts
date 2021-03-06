// tslint:disable:enforce-comments-on-exported-symbols global enums
export const enum IdleOption {
  YES = 'Yes',
  NO = 'No',
}

export const enum OpExecutor {
  NONE = '',
  DEVICE = 'Device',
  HOST = 'Host'
}

export const enum OpKind {
  NONE = '',
  NAME = 'Name',
  TYPE = 'Type'
}

export const enum OpType {
  NONE = '',
  TENSORFLOW = 'TensorFlow',
  XLA_HLO = 'HLO',
}

export const enum TpuClass {
  UNKNOWN = 0,
  TPU_V2,
  TPU_V3,
}

export const enum DataRequestType {
  UNKNOWN = 0,
  DATA_REQUEST_BEGIN,
  TENSORFLOW_STATS,
  DATA_REQUEST_END,
  DIFF_DATA_REQUEST_BEGIN,
  TENSORFLOW_STATS_DIFF,
  DIFF_DATA_REQUEST_END,
}

export const enum FileExtensionType {
  UNKNOWN = '',
  PROTO_BINARY = 'pb',
  PROTO_TEXT = 'pbtxt',
  JSON = 'json',
  SHORT_TEXT = 'short_txt',
  LONG_TEXT = 'long_txt',
}
// tslint:enable:enforce-comments-on-exported-symbols
