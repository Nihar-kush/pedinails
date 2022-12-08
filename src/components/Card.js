import { RadialBar } from "@nivo/radial-bar";
import React from "react";

export default function Card({ title, rate, l1, l2, r1, r2, color }) {
  const Metric = ({ center }) => {
    return (
      <>
        <text
          x={center[0]}
          y={center[1]}
          textAnchor="middle"
          dominantBaseline="middle"
          style={{
            fontSize: 35,
            fill: color,
          }}
        >
          {rate}%
        </text>
      </>
    );
  };
  return (
    <div className="rounded-lg bg-[#F0F0F0] shadow-lg w-[14rem] h-[17rem] overflow-hidden flex flex-col">
      <div className="bg-[#FCAC11] flex items-center font-semibold justify-center h-[20%]">
        {title}
      </div>
      <div
        className={`h-[60%] text-4xl font-semibold flex items-center justify-center`}
        style={{ color: color }}
      >
        <RadialBar
          width={130}
          height={130}
          maxValue={100}
          startAngle={0}
          endAngle={360}
          cornerRadius={100}
          innerRadius={0.89}
          colors={[color]}
          animate={true}
          isInteractive={true}
          data={[
            {
              data: [{ y: rate }],
            },
          ]}
          layers={["tracks", "bars", Metric]}
        />
      </div>
      <div className="px-5 pb-4 h-[20%] flex items-center justify-between">
        <span className="">
          <p className="text-sm">{l1}</p>
          <p className="font-semibold text-sm">{l2}</p>
        </span>
        <span className="">
          <p className="text-sm">{r1}</p>
          <p className="font-semibold text-sm">{r2}</p>
        </span>
      </div>
    </div>
  );
}
