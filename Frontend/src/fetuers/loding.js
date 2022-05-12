import React from 'react';

// Better way to reduce bundle size
import BarWave from "react-cssfx-loading/lib/BarWave";


const loding = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <BarWave />

// Available Props
<BarWave color="#FF0000" width="100px" height="100px" duration="3s" />

// It also supports all props of an HTML element (or JSX)
<BarWave onClick={() => alert("Clicked")} key="key" />
    </div>
  );
};

export default loding;
