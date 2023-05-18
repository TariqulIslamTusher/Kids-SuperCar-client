import React, { useState } from 'react';

const Category = () => {
    const [border, setBorder] = useState(0)
    return (
        <div>
            <div>
                <h2>Categories of items</h2>
            </div>
            <div className="tab justify-center gap-6">
                <a onClick={() => setBorder(1)} className={border === 1 ? "tab tab-lifted tab-lg tab-active text-xl" : "tab tab-lifted tab-lg text-xl"}>Sports </a>
                < a onClick={() => setBorder(2)} className={border === 2 ? "tab tab-lifted tab-lg tab-active text-xl" : "tab tab-lifted tab-lg text-xl"}>Bus</a>
                < a onClick={() => setBorder(3)} className={border === 3 ? "tab tab-lifted tab-lg tab-active text-xl" : "tab tab-lifted tab-lg text-xl"}>Truck</a>
            </div>
            {
                border? 
                <>
                    <div className='mt-5 border-4 rounded border-t-0'>there will be the features</div>
                </> : ""
            }
        </div>
    );
};

export default Category;