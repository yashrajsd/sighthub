import { METRICS_CATEGORIES } from '@/constants/components';
import { Box, ChevronDown, ChevronRight, Crown, X } from 'lucide-react'
import React, { useState } from 'react'
import { MetricProp } from '..';

type Props = {
  setSelectingM: React.Dispatch<React.SetStateAction<boolean>>
  setMetrics: React.Dispatch<React.SetStateAction<MetricProp[]>>
}

const Metrics = ({ setSelectingM, setMetrics }: Props) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleMetricAddition = (item: MetricProp&{permission:boolean}) => {
    if(!item.permission)return
    setMetrics((prev) => {
      if (prev.some((metric) => metric.label === item.label)) {
        return prev; 
      }
      return [...prev, item];
    });
    setSelectingM(false);
  };

  return (
    <div className="w-full h-full bg-[rgba(27,27,27,0.7)] absolute flex justify-center items-center">
      <div className="bg-[#26262D] h-[90%] w-[40%] overflow-hidden rounded-md">
        <div className="p-4 h-full flex flex-col">
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-2">
              <Box size={19} /> Metrics
            </span>
            <X
              size={19}
              className="cursor-pointer"
              onClick={() => {
                setSelectingM(false);
              }}
            />
          </div>

          <div className="overflow-y-scroll mt-3 hide-scrollbar space-y-4">
            {Object.entries(METRICS_CATEGORIES).map(([category, items]) => (
              <div key={category}>
                <div
                  className="flex justify-between items-center cursor-pointer px-3 py-2"
                  onClick={() =>
                    setExpanded(expanded === category ? null : category)
                  }
                >
                  <span>{category.replace(/([A-Z])/g, " $1")}</span>
                  {expanded === category ? (
                    <ChevronDown size={16} />
                  ) : (
                    <ChevronRight size={16} />
                  )}
                </div>
                {expanded === category && (
                  <div className="mt-2 space-y-2 pl-4">
                    {items.map((metric) => (
                      <div
                        key={metric.id}
                        className="px-3 py-2 flex items-center gap-2 text-[#C8C8C8] hover:text-white cursor-pointer text-[0.9rem]"
                        onClick={() => handleMetricAddition({ icon: metric.icon, label: metric.label ,permission:metric.type==="free"})}
                      >
                        {metric.type === 'premium' && <Crown size={16} color='#FFD700' />}
                        {metric.icon}
                        {metric.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
