import React from "react";
import customer from '../../assets/images/customer.png'
import revenue from '../../assets/images/revenue.png'
import sandpaper from '../../assets/images/sandpaper.png'
import success from '../../assets/images/success.png'

const BusinessSummary = () => {
  return (
    <div>
      <div class="stats stats-vertical lg:stats-horizontal shadow bg-neutral md:w-md lg:w-lg">
        <div class="stat">
          <div class="stat-figure text-secondary">
              <img src={customer} className='w-16' alt="" />
            
          </div>
          <div class="stat-title">Served</div>
          <div class="stat-value">100+</div>
          <div class="stat-desc">Customers</div>
        </div>
        <div class="stat">
          <div class="stat-figure text-secondary">
          <img src={revenue} className='w-16' alt="" />
          </div>
          <div class="stat-title">Generate</div>
          <div class="stat-value">120M+</div>
          <div class="stat-desc">Annual revenue</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
          <img src={success} className='w-16' alt="" />
          </div>
          <div class="stat-title">Achieved</div>
          <div class="stat-value">33K+ </div>
          <div class="stat-desc">Reviews</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
          <img src={sandpaper} className='w-16' alt="" />
          </div>
          <div class="stat-title">We have</div>
          <div class="stat-value">10+</div>
          <div class="stat-desc">Sandpaper Variety</div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
