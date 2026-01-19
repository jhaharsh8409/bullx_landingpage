import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, BarChart3, Calendar, Target, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'Trade Tracking',
    description: 'Record every trade with detailed entry and exit points, position sizes, and market conditions.'
  },
  {
    icon: BarChart3,
    title: 'Performance Analytics',
    description: 'Visualize your trading performance with comprehensive charts and statistics to identify strengths and weaknesses.'
  },
  {
    icon: Calendar,
    title: 'Trading Calendar',
    description: 'View your trading history in a calendar format to spot patterns and optimize your trading schedule.'
  },
  {
    icon: Target,
    title: 'Goal Setting',
    description: 'Set realistic trading goals and track your progress with customizable targets and milestones.'
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Monitor your risk exposure with real-time calculations of position sizes, stop losses, and risk-reward ratios.'
  },
  {
    icon: Zap,
    title: 'Quick Entry',
    description: 'Log trades quickly with intuitive forms and templates, so you can focus on what matters most - trading.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 xl:py-24 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12 xl:mb-16">
          <h2 className="text-3xl xl:text-5xl font-bold tracking-tight">
            Powerful Features for Serious Traders
          </h2>
          <p className="text-base xl:text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to become a more disciplined and profitable trader
          </p>
        </div>
        
        <div className="grid grid-cols-1 @container">
          <div className="grid grid-cols-1 @md:grid-cols-2 @lg:grid-cols-3 gap-6 xl:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="border-border hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
