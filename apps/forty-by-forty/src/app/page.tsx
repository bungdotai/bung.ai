"use client";

import { useState, useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

const TARGET = 40_000_000;

function formatMoney(n: number): string {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
  return `$${n.toFixed(0)}`;
}

interface Projection {
  age: number;
  netWorth: number;
}

function calculate(
  currentAge: number,
  currentNetWorth: number,
  annualIncome: number,
  savingsRate: number,
  returnRate: number
): Projection[] {
  const data: Projection[] = [{ age: currentAge, netWorth: currentNetWorth }];
  let nw = currentNetWorth;
  const annualSavings = annualIncome * (savingsRate / 100);
  for (let age = currentAge + 1; age <= 40; age++) {
    nw = (nw + annualSavings) * (1 + returnRate / 100);
    data.push({ age, netWorth: Math.round(nw) });
  }
  return data;
}

function NumberInput({
  label,
  value,
  onChange,
  prefix,
  suffix,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  prefix?: string;
  suffix?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-400 mb-1.5">
        {label}
      </label>
      <div className="flex items-center bg-neutral-800/60 border border-neutral-700 rounded-lg overflow-hidden focus-within:border-emerald-500/50 transition-colors">
        {prefix && (
          <span className="pl-3 text-neutral-500 text-sm select-none">
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent px-3 py-2.5 text-white outline-none text-sm"
        />
        {suffix && (
          <span className="pr-3 text-neutral-500 text-sm select-none">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-neutral-800 border border-neutral-700 rounded-lg px-3 py-2 shadow-xl">
        <p className="text-neutral-400 text-xs">Age {label}</p>
        <p className="text-white font-semibold text-sm">
          {formatMoney(payload[0].value)}
        </p>
      </div>
    );
  }
  return null;
};

export default function Home() {
  const [age, setAge] = useState("34");
  const [netWorth, setNetWorth] = useState("500000");
  const [income, setIncome] = useState("300000");
  const [savingsRate, setSavingsRate] = useState("30");
  const [returnRate, setReturnRate] = useState("8");

  const ageNum = parseInt(age) || 0;
  const nwNum = parseFloat(netWorth) || 0;
  const incNum = parseFloat(income) || 0;
  const srNum = parseFloat(savingsRate) || 0;
  const rrNum = parseFloat(returnRate) || 0;

  const isOverForty = ageNum >= 40;
  const hasInputs = ageNum > 0 && ageNum < 40;

  const projection = useMemo(() => {
    if (!hasInputs) return [];
    return calculate(ageNum, nwNum, incNum, srNum, rrNum);
  }, [ageNum, nwNum, incNum, srNum, rrNum, hasInputs]);

  const projectedAtForty = projection.length > 0 ? projection[projection.length - 1].netWorth : 0;
  const onTrack = projectedAtForty >= TARGET;
  const gap = TARGET - projectedAtForty;
  const yearsLeft = 40 - ageNum;

  // Chart data with target line
  const chartData = projection.map((p) => ({
    ...p,
    target: TARGET,
  }));

  return (
    <main className="flex-1 flex flex-col">
      {/* Header */}
      <header className="text-center pt-10 pb-6 px-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          40 by 40 💰
        </h1>
        <p className="text-neutral-400 mt-2 text-lg">
          Are you on track to $40M by age 40?
        </p>
      </header>

      <div className="flex-1 max-w-2xl mx-auto w-full px-4 pb-8 space-y-6">
        {/* Form */}
        <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <NumberInput
              label="Current Age"
              value={age}
              onChange={setAge}
              placeholder="34"
            />
            <NumberInput
              label="Current Net Worth"
              value={netWorth}
              onChange={setNetWorth}
              prefix="$"
              placeholder="500000"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <NumberInput
              label="Annual Income"
              value={income}
              onChange={setIncome}
              prefix="$"
              placeholder="300000"
            />
            <NumberInput
              label="Savings Rate"
              value={savingsRate}
              onChange={setSavingsRate}
              suffix="%"
              placeholder="30"
            />
          </div>
          <NumberInput
            label="Expected Annual Return"
            value={returnRate}
            onChange={setReturnRate}
            suffix="%"
            placeholder="8"
          />
        </div>

        {/* Over 40 */}
        {isOverForty && (
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 text-center">
            <p className="text-5xl mb-4">😂</p>
            <h2 className="text-2xl font-bold text-neutral-300">
              You had your chance
            </h2>
            <p className="text-neutral-500 mt-2">
              The &ldquo;by 40&rdquo; ship has sailed. But hey, 50 is the new
              40, right?
            </p>
          </div>
        )}

        {/* Results */}
        {hasInputs && (
          <>
            {/* Verdict */}
            <div
              className={`rounded-2xl p-6 text-center border ${
                onTrack
                  ? "bg-emerald-950/30 border-emerald-800/50"
                  : "bg-red-950/30 border-red-800/50"
              }`}
            >
              <p className="text-4xl mb-2">{onTrack ? "🎯" : "📉"}</p>
              <h2
                className={`text-2xl md:text-3xl font-bold ${
                  onTrack ? "text-emerald-400" : "text-red-400"
                }`}
              >
                {onTrack ? "On Track" : "Not Quite"}
              </h2>
              <div className="mt-4 space-y-1 text-sm text-neutral-300">
                <p>
                  <span className="text-neutral-500">Years remaining:</span>{" "}
                  <span className="font-semibold">{yearsLeft}</span>
                </p>
                <p>
                  <span className="text-neutral-500">
                    Projected at 40:
                  </span>{" "}
                  <span className="font-semibold text-white">
                    {formatMoney(projectedAtForty)}
                  </span>
                </p>
                {onTrack ? (
                  <p className="text-emerald-400 font-medium mt-2">
                    You&apos;ll exceed the target by{" "}
                    {formatMoney(projectedAtForty - TARGET)} 🚀
                  </p>
                ) : (
                  <p className="text-red-400 font-medium mt-2">
                    You&apos;ll have {formatMoney(projectedAtForty)} — need{" "}
                    {formatMoney(gap)} more
                  </p>
                )}
              </div>
            </div>

            {/* Chart */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-sm font-medium text-neutral-400 mb-4">
                Net Worth Projection
              </h3>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient
                        id="colorNw"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor={onTrack ? "#10b981" : "#ef4444"}
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor={onTrack ? "#10b981" : "#ef4444"}
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#262626"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="age"
                      stroke="#525252"
                      tick={{ fill: "#737373", fontSize: 12 }}
                      tickLine={false}
                    />
                    <YAxis
                      stroke="#525252"
                      tick={{ fill: "#737373", fontSize: 12 }}
                      tickLine={false}
                      tickFormatter={(v: number) => formatMoney(v)}
                      width={60}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <ReferenceLine
                      y={TARGET}
                      stroke="#fbbf24"
                      strokeDasharray="6 4"
                      strokeWidth={1.5}
                      label={{
                        value: "$40M",
                        position: "insideTopRight",
                        fill: "#fbbf24",
                        fontSize: 11,
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="netWorth"
                      stroke={onTrack ? "#10b981" : "#ef4444"}
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#colorNw)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Year-by-year table */}
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-sm font-medium text-neutral-400 mb-4">
                Year-by-Year Breakdown
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-neutral-500 border-b border-neutral-800">
                      <th className="text-left py-2 font-medium">Age</th>
                      <th className="text-right py-2 font-medium">
                        Net Worth
                      </th>
                      <th className="text-right py-2 font-medium">
                        vs Target
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {projection.map((row) => {
                      const diff = row.netWorth - TARGET;
                      const pct = ((row.netWorth / TARGET) * 100).toFixed(0);
                      return (
                        <tr
                          key={row.age}
                          className="border-b border-neutral-800/50 hover:bg-neutral-800/30 transition-colors"
                        >
                          <td className="py-2 text-neutral-300">{row.age}</td>
                          <td className="py-2 text-right text-white font-medium">
                            {formatMoney(row.netWorth)}
                          </td>
                          <td
                            className={`py-2 text-right text-xs ${
                              diff >= 0 ? "text-emerald-400" : "text-red-400"
                            }`}
                          >
                            {pct}%
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-neutral-600 text-sm border-t border-neutral-800/50">
        Powered by Bung 🐡
      </footer>
    </main>
  );
}
