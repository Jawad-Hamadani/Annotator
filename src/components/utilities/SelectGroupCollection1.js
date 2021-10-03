import { Fragment } from 'react';
import SelectGroup from './SelectGroup';

const SelectGroupCollection1 = () => {
  return (
    <Fragment>
      <SelectGroup
        spacing='1'
        formWidth='100px'
        options={['Baseword', 'Enclitic', 'Proclitic']}
        id='Select-5'
      />
      <SelectGroup
        spacing='1'
        formWidth='100px'
        options={['Approximate', 'Exact']}
        id='Select-6'
      />
      <SelectGroup
        spacing='1'
        formWidth='100px'
        options={['Gulf Tags', 'MSA tags', 'CODA Examples']}
        id='Select-7'
      />
    </Fragment>
  );
};

export default SelectGroupCollection1;
