import { Store } from 'vuex';
import { StoreType } from './store';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<StoreType>;
  }
}
