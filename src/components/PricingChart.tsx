import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, LabelList } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles } from 'lucide-react';

const PricingChart = () => {
  const chartData = [
    {
      service: 'Social Media',
      fullName: 'Social Media Management',
      'Agency Cost': 22500,
      'Askit Cost': 16000,
      savings: '29%',
      savingsLabel: '-29%'
    },
    {
      service: 'SEO Package',
      fullName: 'Basic SEO Package',
      'Agency Cost': 22500,
      'Askit Cost': 16000,
      savings: '29%',
      savingsLabel: '-29%'
    },
    {
      service: 'Content Writing',
      fullName: 'Content/Blogs/Copywriting',
      'Agency Cost': 6000,
      'Askit Cost': 3000,
      savings: '50%',
      savingsLabel: '-50%'
    },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card border-2 border-accent/40 rounded-lg p-4 shadow-neon min-w-[220px] backdrop-blur-sm">
          <p className="font-bold mb-3 text-base leading-tight text-foreground">{data.fullName}</p>
          <div className="space-y-2">
            {payload.map((entry: any, index: number) => (
              <div key={index} className="flex justify-between items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">{entry.name}:</span>
                <span 
                  style={{ color: entry.color }} 
                  className="text-sm font-bold whitespace-nowrap"
                >
                  ₹{entry.value.toLocaleString('en-IN')}
                </span>
              </div>
            ))}
            <div className="pt-2 mt-2 border-t border-accent/20">
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-lg font-bold text-accent">
                  Save {data.savings}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="border-accent/30 bg-gradient-to-br from-background via-background to-accent/5 shadow-neon relative overflow-hidden">
      {/* Decorative glow effects */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
      
      <CardHeader className="space-y-4 pb-6 relative">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Sparkles className="w-8 h-8 text-accent animate-pulse" />
          <CardTitle className="text-center text-3xl md:text-4xl leading-tight font-bold">
            Industry vs. Askit <span className="bg-gradient-accent bg-clip-text text-transparent">Smart Savings</span>
          </CardTitle>
          <Sparkles className="w-8 h-8 text-accent animate-pulse" />
        </div>
        <p className="text-center text-muted-foreground text-base md:text-lg font-medium">
          Monthly pricing comparison (in ₹) — See the dramatic difference
        </p>
      </CardHeader>
      <CardContent className="px-4 md:px-6">
        <div className="w-full overflow-x-auto">
          <ResponsiveContainer width="100%" height={450} minWidth={300}>
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 40, left: 60, bottom: 80 }}
              barGap={8}
              barCategoryGap="20%"
            >
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis 
                dataKey="service" 
                angle={0}
                textAnchor="middle"
                height={100}
                interval={0}
                tick={{ 
                  fill: 'hsl(var(--foreground))',
                  fontSize: 12,
                  fontWeight: 500
                }}
                tickLine={{ stroke: 'hsl(var(--border))' }}
              />
              <YAxis 
                tick={{ 
                  fill: 'hsl(var(--foreground))',
                  fontSize: 12
                }}
                tickLine={{ stroke: 'hsl(var(--border))' }}
                axisLine={{ stroke: 'hsl(var(--border))' }}
                tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}k`}
                label={{ 
                  value: 'Monthly Cost (₹)', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { 
                    fill: 'hsl(var(--foreground))',
                    fontSize: 14,
                    fontWeight: 600
                  }
                }}
              />
              <Tooltip 
                content={<CustomTooltip />}
                cursor={{ fill: 'hsl(var(--primary))', opacity: 0.1 }}
              />
              <Legend 
                wrapperStyle={{ 
                  paddingTop: '30px',
                  fontSize: '14px'
                }}
                iconType="square"
                iconSize={16}
              />
              <Bar 
                dataKey="Agency Cost" 
                fill="hsl(var(--muted-foreground))" 
                radius={[8, 8, 0, 0]}
                name="Agency Cost"
                maxBarSize={80}
                opacity={0.7}
              />
              <Bar 
                dataKey="Askit Cost" 
                radius={[8, 8, 0, 0]}
                name="Askit Cost"
                maxBarSize={80}
              >
                {chartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`}
                    fill="hsl(var(--accent))"
                    style={{ 
                      filter: 'drop-shadow(0 0 20px hsl(var(--accent))) drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
                    }}
                  />
                ))}
                <LabelList 
                  dataKey="savingsLabel" 
                  position="top" 
                  offset={12}
                  style={{ 
                    fill: 'hsl(var(--accent))', 
                    fontWeight: 'bold', 
                    fontSize: '16px',
                    textShadow: '0 0 10px hsl(var(--accent))',
                  }} 
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-10 text-center space-y-4 px-2">
          <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 backdrop-blur-sm">
            <p className="text-base md:text-lg text-foreground leading-relaxed font-medium">
              Agency pricing varies widely by scope and campaign. Askit connects MSMEs with student talent for <span className="text-accent font-bold text-xl">30–60% lower costs</span> without compromising creativity or quality.
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground italic">
              * Values shown are approximate monthly averages for comparison
            </p>
            <p className="text-xs text-muted-foreground italic">
              * These prices are estimates taken from the internet for viewer's reference
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingChart;
