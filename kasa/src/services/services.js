// import axios from 'axios';

export function services (iDLocation) {
  const getDatas = async () => await fetch('data/logements.json').then((res) => { res.ok && res.json(); });
  console.log('get VISIBLE', getDatas());

  return { gData: getDatas(), selData: selectDatas() };
}
