
    export type RemoteKeys = 'federation_provider/add';
    type PackageType<T> = T extends 'federation_provider/add' ? typeof import('federation_provider/add') :any;