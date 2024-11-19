import React from 'react';
import Link from 'next/link';
import FeatureSection from './FeatureSection/page';

function Home() {
  return (
    <div>
      <Link href='/features'><FeatureSection /></Link>
    </div>
  )
}

export default Home;