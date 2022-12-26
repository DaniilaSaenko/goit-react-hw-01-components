import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from 'data/user.json';
import stats from 'data/statistics.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';


export const App = () => {
  const { username, tag, location, stats, avatar } = user;
  return (
       <>
      <Profile 
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      stats={stats}
      />
      <Statistics title="UPLOAD STATS" stats={stats} />
      <FriendsList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </>
  );
};
