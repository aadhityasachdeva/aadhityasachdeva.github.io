import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PricingChart = () => {
  const chartData = [
    {
      service: 'Social Media Management',
      'Agency Cost': 32500,
      'Askit Cost': 16000,
    },
    {
      service: 'Basic SEO Package',
      'Agency Cost': 32500,
      'Askit Cost': 16000,
    },
    {
      service: 'Content/Blogs/Copywriting',
      'Agency Cost': 6000,
      'Askit Cost': 3000,
    },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-4 shadow-lg">
          <p className="font-semibold mb-2">{payload[0].payload.service}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {entry.name}: ₹{entry.value.toLocaleString('en-IN')}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="border-primary/20 bg-gradient-to-br from-background to-muted/30">
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          Industry vs. Askit <span className="text-primary">Pricing Comparison</span>
        </CardTitle>
        <p className="text-center text-muted-foreground text-sm mt-2">
          Monthly pricing comparison (in ₹)
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
            <XAxis 
              dataKey="service" 
              angle={-15}
              textAnchor="end"
              height={80}
              className="text-xs"
              tick={{ fill: 'hsl(var(--foreground))' }}
            />
            <YAxis 
              tick={{ fill: 'hsl(var(--foreground))' }}
              label={{ 
                value: 'Cost (₹)', 
                angle: -90, 
                position: 'insideLeft',
                style: { fill: 'hsl(var(--foreground))' }
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="square"
            />
            <Bar 
              dataKey="Agency Cost" 
              fill="hsl(var(--muted-foreground))" 
              radius={[8, 8, 0, 0]}
              name="Agency Cost"
            />
            <Bar 
              dataKey="Askit Cost" 
              fill="hsl(var(--primary))" 
              radius={[8, 8, 0, 0]}
              name="Askit Cost"
            />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-6 text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            Agency pricing varies widely by scope and campaign. Askit connects MSMEs with student talent for <span className="text-primary font-semibold">30–60% lower costs</span> without compromising creativity or quality.
          </p>
          <p className="text-xs text-muted-foreground italic">
            * Values shown are approximate monthly averages for comparison
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingChart;
