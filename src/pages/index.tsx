import { Button } from 'antd';
import { useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

function Index() {
  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, 'tests');
    onValue(starCountRef, snapshot => {
      const data = snapshot.val();
      console.log(data);
    });
  }, []);

  return (
    <>
      <Button type="primary">Button</Button>
      <p>Hello</p>;
    </>
  );
}

export default Index;
