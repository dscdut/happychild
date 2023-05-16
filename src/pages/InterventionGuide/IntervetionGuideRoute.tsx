import { useParams } from 'react-router-dom';
import { onValue, ref } from 'firebase/database';
import { realTimeDatabase, auth } from '#/shared/utils/firebase';
import { useEffect, useState } from 'react';
import { calculateAgeInMonths } from '#/shared/utils/tools';
import InterventionGuide from '.';

const InterventionGuideRoute = () => {
  const [ageStageIndex, setAgeStageIndex] = useState('');

  const childRef = ref(realTimeDatabase, `children/${auth.currentUser?.uid}`);
  const { childId } = useParams();

  useEffect(() => {
    onValue(childRef, async snapshot => {
      const child = await snapshot.val();

      const ageInMonths = calculateAgeInMonths(
        child[childId || ''].info.birthday,
      );

      if (ageInMonths >= 0 && ageInMonths < 3) {
        setAgeStageIndex('1');
      } else if (ageInMonths >= 3 && ageInMonths < 6) {
        setAgeStageIndex('2');
      } else if (ageInMonths >= 6 && ageInMonths < 9) {
        setAgeStageIndex('3');
      } else if (ageInMonths >= 9 && ageInMonths < 12) {
        setAgeStageIndex('4');
      } else if (ageInMonths >= 12 && ageInMonths <= 23) {
        setAgeStageIndex('5');
      } else if (ageInMonths >= 24 && ageInMonths <= 35) {
        setAgeStageIndex('6');
      } else if (ageInMonths >= 36 && ageInMonths <= 47) {
        setAgeStageIndex('7');
      } else if (ageInMonths >= 48 && ageInMonths <= 59) {
        setAgeStageIndex('8');
      } else if (ageInMonths >= 60 && ageInMonths <= 71) {
        setAgeStageIndex('9');
      }
    });
  }, []);

  return <InterventionGuide id={ageStageIndex} childId={childId || ''} />;
};

export default InterventionGuideRoute;
