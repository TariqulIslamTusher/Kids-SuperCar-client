import React from 'react';
import HomeTab from './HomeTab';

const HomeCategory = () => {
    return (
        <div className="w-full px-6 overflow-hidden text-center pb-10 bg-gradient-to-b from-slate-50 to-slate-200">
            <h2 className="text-4xl md:w-6/12 mx-auto heading-text divide-y-2 pb-4">
                CAR'S CATEGORY WE HAVE
            </h2>

            <HomeTab></HomeTab>
        </div>
      );
};

export default HomeCategory;