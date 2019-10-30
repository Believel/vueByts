export interface TreeData {
  name: string;
  key: string;
  type: 'folder' | 'file'; // 联合类型 是文件夹还是文件 folder file
  collapsed: boolean; // 是否展开 true是折叠，false是展开
  children?: TreeData[] | null; // ? 表示是可选属性
  parent?: TreeData; // 父级对象
  checked?: boolean; // 是否选中
  loading?: boolean; // 是否正在加载中
}