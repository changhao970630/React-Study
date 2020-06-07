// 将所有的reducers绑定到一起方便导入导出
import counter from "./counter";
import user from "./user";
import { combineReducers } from "redux";
const totalReducers = combineReducers({
  counter,
  user,
});
export default totalReducers;
