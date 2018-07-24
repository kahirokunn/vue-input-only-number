# vue-input-only-number

## インストール方法
npm

```
$ npm install vue-input-only-number
```

yarn

```
$ yarn add vue-input-only-number
```

intだけ入力できるようにする

```
import onlyInt from 'vue-input-only-number';

Vue.use(onlyInt);

<input type="text" v-int>
```

floatだけ入力できるようにする

```
import { onlyFloat } from 'vue-input-only-number';

Vue.use(onlyFloat);

<input type="text" v-float>
```

両方

```
import onlyInt, { onlyFloat } from 'vue-input-only-number';

Vue.use(onlyInt);
Vue.use(onlyFloat);

<input type="text" v-int>
<input type="text" v-float>
```

## 特徴
inputやtextareaなどで、int、又はfloatしか入力できなくなる。
主にデザイン要件を満たすために使う。
