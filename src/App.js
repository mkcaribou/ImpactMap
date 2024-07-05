import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ErrorBar, Cell } from 'recharts';

const data = [
  {
    name: "De Oliveira, 2022, Brazil",
    businessPractices: 0.181,
    businessPracticesSE: 0.065,
    businessPracticesSig: "***",
    revenues: 11.05,
    revenuesSE: 14.73,
    revenuesSig: null,
    profits: 15.12,
    profitsSE: 44.43,
    profitsSig: null,
    notes: "When reinforced by incentives and reminders, the training on record keeping had some impacts on business practices and firm survival. On its own, the WhatsApp training had no effect"
  },
  {
    name: "Cole et al., 2023, Philippines",
    businessPractices: 0.07,
    businessPracticesSE: 0.036,
    businessPracticesSig: "**",
    revenues: -6.98,
    revenuesSE: 5.46,
    revenuesSig: null,
    profits: -4.14,
    profitsSE: 4.84,
    profitsSig: null,
    notes: "We find that the training had a statistically significant impact on the adoption of improved business practices, with an increase of 0.07 to 0.13 standard deviation points. We find no evidence of impacts on sales or profits, though the confidence intervals are wide enough to include meaningful effect sizes (positive or negative)."
  },
  {
    name: "Cole et al., 2023, India",
    businessPractices: 0.13,
    businessPracticesSE: 0.035,
    businessPracticesSig: "***",
    revenues: 6.15,
    revenuesSE: 4.01,
    revenuesSig: null,
    profits: -0.24,
    profitsSE: 3.38,
    profitsSig: null,
    notes: "We find that the training had a statistically significant impact on the adoption of improved business practices, with an increase of 0.07 to 0.13 standard deviation points. We find no evidence of impacts on sales or profits, though the confidence intervals are wide enough to include meaningful effect sizes (positive or negative)."
  },
  {
    name: "Mehmood, 2024, Kenya",
    businessPractices: -0.0638,
    businessPracticesSE: 0.0399,
    businessPracticesSig: null,
    revenues: -3.72,
    revenuesSE: 5.95,
    revenuesSig: null,
    profits: -1.13,
    profitsSE: 5.19,
    profitsSig: null,
    notes: "First RCT on SMS training. There are some significant results in the short term, but they dissipate after 1 year"
  },
  {
    name: "Fuchs et al., 2023, Kenya (preliminary)",
    businessPractices: 0.1,
    businessPracticesSE: 0.05,
    businessPracticesSig: "**",
    revenues: 5,
    revenuesSE: 2.5,
    revenuesSig: "**",
    profits: null,
    profitsSE: null,
    profitsSig: null,
    notes: "Preliminary results show significant positive impacts on business practices and revenues"
  },
  {
    name: "Davies et al., 2023, Mexico",
    businessPractices: 0.007,
    businessPracticesSE: 0.014,
    businessPracticesSig: null,
    revenues: -7.39,
    revenuesSE: 8.22,
    revenuesSig: null,
    profits: -10.46,
    profitsSE: 7.11,
    profitsSig: null,
    notes: "Significant results at 2 months but dissipate at 6 months"
  },
  {
    name: "Estefan et al., 2023, Guatemala",
    businessPractices: 0.318,
    businessPracticesSE: 0.095,
    businessPracticesSig: "***",
    revenues: 9.60,
    revenuesSE: 4.44,
    revenuesSig: "**",
    profits: 23.30,
    profitsSE: 9.32,
    profitsSig: "**",
    notes: "Statistically significant impact at conventional levels on sales of 231 USD (t-statistic=2.2), or 9.6 percent relative to the control mean in October 2021, for the estimating sample of that excludes the stores of multi-store owners. Consulting meetings were crucial in inducing engagement with the app's content. Program flexibility, internet access, and initial sales were key determinants of training effectiveness."
  },
  {
    name: "Anderson et al., 2023, Uganda",
    businessPractices: 0.305,
    businessPracticesSE: 0.092,
    businessPracticesSig: "***",
    revenues: 32.00,
    revenuesSE: 19.30,
    revenuesSig: "*",
    profits: 31.00,
    profitsSE: 13.70,
    profitsSig: "**",
    notes: "Firm sales and profits of female entrepreneurs guided by a female mentor increased by, on average, 32% and 31% compared with the control group, and these estimates are even larger for female entrepreneurs with high aspirations. In contrast, female entrepreneurs guided by a male mentor did not significantly improve performance compared with the control group"
  },
  {
    name: "Anderson et al., 2022, Uganda",
    businessPractices: 0.44,
    businessPracticesSE: 0.08,
    businessPracticesSig: "***",
    revenues: 32.40,
    revenuesSE: 12.67,
    revenuesSig: "**",
    profits: null,
    profitsSE: null,
    profitsSig: null,
    notes: "Results driven by those that switch their marketing strategy due to the mentoring"
  },
  {
    name: "Anderson et al., 2021, Uganda",
    businessPractices: 0.254,
    businessPracticesSE: 0.086,
    businessPracticesSig: "***",
    revenues: 51.66,
    revenuesSE: 20.34,
    revenuesSig: "**",
    profits: 35.77,
    profitsSE: 19.33,
    profitsSig: "*",
    notes: "Entrepreneurs who were randomly matched with volunteer marketers significantly increased firm growth: on average, monthly sales grew by 51.7%, monthly profits improved by 35.8%, total assets increased by 31.0%, and number of paid employees rose by 23.8%. Entrepreneurs matched with a consultant or other professional saw no impact"
  },
  {
    name: "Cusolito et al., 2022, Western Balkans",
    businessPractices: -0.020,
    businessPracticesSE: 0.031,
    businessPracticesSig: null,
    revenues: 10.30,
    revenuesSE: 48.80,
    revenuesSig: null,
    profits: null,
    profitsSE: null,
    profitsSig: null,
    notes: "Treated firms used techniques such as search engine optimization and improved Facebook content to increase their digital presence and better reach foreign customers. A year later, positive and significant impacts are found on the number of customers, and a significant intensive margin increase in export sales. Qualitative interviews suggest this improvement came from a combination of sector-specific advice on market expansion, and through an encouragement effect which gave entrepreneurs the confidence to try new sales strategies."
  },
  {
    name: "McKenzie et al., 2020, Nigeria",
    businessPractices: 0.002,
    businessPracticesSE: 0.025,
    businessPracticesSig: null,
    revenues: 5.15,
    revenuesSE: 4.50,
    revenuesSig: null,
    profits: 5.34,
    profitsSE: 5.22,
    profitsSig: null,
    notes: "The study compared different types of interventions: training, insourcing, outsourcing, and consulting. The results shown here are for the training intervention."
  },
  {
    name: "Otis et al., 2023, Kenya",
    businessPractices: null,
    businessPracticesSE: null,
    businessPracticesSig: null,
    revenues: 0,
    revenuesSE: null,
    revenuesSig: null,
    profits: 0,
    profitsSE: null,
    profitsSig: null,
    notes: "Across the whole sample, no impact was detected. Point estimates suggest that high performers benefited by just over 15% from AI advice, whereas low performers did about 8% worse with AI assistance. Exploratory analysis of WhatsApp interaction logs shows that both groups sought the AI mentor's advice, but that low performers did worse because they sought help on more challenging business tasks."
  }
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const study = payload[0].payload;
    return (
      <div className="custom-tooltip" style={{ backgroundColor: 'white', padding: '10px', border: '1px solid #ccc', maxWidth: '300px' }}>
        <h4 style={{ margin: '0 0 10px 0' }}>{study.name}</h4>
        <p><strong>Business Practices:</strong> {study.businessPractices?.toFixed(3) ?? 'N/A'} SD (SE: {study.businessPracticesSE?.toFixed(3) ?? 'N/A'}) {study.businessPracticesSig ? `[${study.businessPracticesSig}]` : ''}</p>
        <p><strong>Revenues:</strong> {study.revenues?.toFixed(2) ?? 'N/A'}% (SE: {study.revenuesSE?.toFixed(2) ?? 'N/A'}) {study.revenuesSig ? `[${study.revenuesSig}]` : ''}</p>
        <p><strong>Profits:</strong> {study.profits?.toFixed(2) ?? 'N/A'}% (SE: {study.profitsSE?.toFixed(2) ?? 'N/A'}) {study.profitsSig ? `[${study.profitsSig}]` : ''}</p>
        <p style={{ marginTop: '10px' }}><strong>Notes:</strong> {study.notes}</p>
      </div>
    );
  }
  return null;
};

const OutcomeChart = ({ data, dataKey, color, yAxisDomain, showLabels }) => (
  <ResponsiveContainer width="100%" height={600}>
    <BarChart
      data={data}
      layout="vertical"
      margin={{ top: 20, right: 30, left: showLabels ? 200 : 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" domain={yAxisDomain} />
      <YAxis dataKey="name" type="category" width={showLabels ? 190 : 0} tick={showLabels} interval={0} />
      <Tooltip content={<CustomTooltip />} />
      <Bar dataKey={dataKey}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry[`${dataKey}Sig`] ? color : '#D3D3D3'} />
        ))}
        <ErrorBar dataKey={`${dataKey}SE`} width={4} strokeWidth={2} stroke="black" />
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

const ImpactVisualization = () => {
  return (
    <div style={{ width: '100%', height: '700px', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ textAlign: 'center' }}>Impact of Upskilling Interventions</h2>
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ textAlign: 'center' }}>Business Practices (SD)</h3>
          <OutcomeChart data={data} dataKey="businessPractices" color="#82ca9d" yAxisDomain={[-0.1, 0.5]} showLabels={true} />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ textAlign: 'center' }}>Revenues (%)</h3>
          <OutcomeChart data={data} dataKey="revenues" color="#ffc658" yAxisDomain={[-20, 60]} showLabels={false} />
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ textAlign: 'center' }}>Profits (%)</h3>
          <OutcomeChart data={data} dataKey="profits" color="#ff7300" yAxisDomain={[-20, 40]} showLabels={false} />
        </div>
      </div>
    </div>
  );
};

export default ImpactVisualization;