import { useContext } from 'react';
import { List, Divider, Tag, Space } from 'antd';
import { LockFilled } from '@ant-design/icons';
import UserInfo from '../UserInfo';
import './index.css';

// 聊天室名称
let data = [
  { name: 'abc', state: false, locked: true },
  { name: 'hello', state: true, locked: true },
  { name: '123GTD', state: false, locked: false },
  { name: 'SummersDay1', state: false, locked: true },
  { name: 'SummersDay2', state: false, locked: true },
  { name: 'SummersDay3', state: false, locked: false },
  { name: 'SummersDay4', state: false, locked: false },
  { name: 'SummersDay5', state: false, locked: false },
  { name: 'SummersDay6', state: false, locked: false },
  { name: 'SummersDay7', state: false, locked: false },
  { name: 'SummersDay8', state: false, locked: false },
  { name: 'SummersDay9', state: false, locked: false },
];
// 获取 state 的时候记得用 useState() 初始化一遍，因为状态要进入聊天室后会更新

export default function GroupList(props: any) {
  return (
    <>
      <UserInfo name={props.name} />
      <div className="group-list">
        <div className="list">
          <List
            size="large"
            dataSource={data}
            renderItem={(item, index) => (
              <List.Item
                onClick={(e) => {
                  Enter(index, props.changeGroupName);
                }}
              >
                <Space>
                  <State joined={item.state}></State>
                  {item.name}
                  <Lock locked={item.locked}></Lock>
                </Space>
              </List.Item>
            )}
          />
        </div>
        <Counter></Counter>
      </div>
    </>
  );
}

// 聊天室相对于用户的状态
function State(props: any) {
  let joined: boolean = props.joined;
  // joioned === true 已经加入该聊天室
  let color = joined ? 'blue' : 'red';
  return <span style={{ color: color }}> # </span>;
}

// 聊天室是否需要密码
function Lock(pros: any) {
  let locked: boolean = pros.locked;
  // locked === ture 私密聊天室
  if (locked) return <LockFilled />;
  return null;
}

// 群聊数量计数器
function Counter() {
  return <span className="counter">共计 {data.length} 个群聊</span>;
}

function Enter(index: number, changeGroupName: any) {
  changeGroupName(data[index].name, data[index].locked);

  //console.log(changeGroupName);
}
