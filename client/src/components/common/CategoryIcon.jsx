import React from 'react';
import {
  Globe, Layout, Server, FileCode, Code, Atom, Cpu, Terminal,
  Coffee, Binary, Braces, Network, Database, Layers, HardDrive,
  Sparkles, TrendingUp, PieChart, GitBranch, Share2, Laptop,
  FolderGit2, Shield, Award, BookOpen
} from 'lucide-react';

const iconMap = {
  Globe, Layout, Server, FileCode, Code, Atom, Cpu, Terminal,
  Coffee, Binary, Braces, Network, Database, Layers, HardDrive,
  Sparkles, TrendingUp, PieChart, GitBranch, Share2, Laptop,
  FolderGit2, Shield, Award, BookOpen
};

const CategoryIcon = ({ name, size = 20, className = '', color }) => {
  const IconComponent = iconMap[name] || BookOpen;
  return <IconComponent size={size} className={className} style={color ? { color } : undefined} />;
};

export default CategoryIcon;
