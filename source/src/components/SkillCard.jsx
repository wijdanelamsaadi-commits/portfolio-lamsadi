import {
  Atom,
  Blocks,
  Bot,
  Box,
  Boxes,
  Brain,
  BrainCircuit,
  BrainCog,
  Braces,
  ChartColumn,
  ChartNetwork,
  ChartNoAxesCombined,
  ChartScatter,
  Cloud,
  Code2,
  Coffee,
  Columns3,
  Container,
  Cpu,
  Database,
  DatabaseSearch,
  DatabaseZap,
  Eye,
  FileCode2,
  Flame,
  GitBranch,
  Hash,
  Layers,
  MessageSquareText,
  Monitor,
  Network,
  Palette,
  PanelTop,
  RefreshCw,
  Rocket,
  Route,
  Router,
  ScanFace,
  ScanText,
  Send,
  Server,
  Shuffle,
  Sigma,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  Table2,
  Terminal,
  TrendingUp,
  Users,
  WandSparkles,
  Wifi,
  Workflow,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import { levelWidths } from "../data/skills";

const iconMap = {
  atom: Atom,
  blocks: Blocks,
  bot: Bot,
  box: Box,
  boxes: Boxes,
  brain: Brain,
  brainCircuit: BrainCircuit,
  brainCog: BrainCog,
  braces: Braces,
  chart: ChartNoAxesCombined,
  chartColumn: ChartColumn,
  chartNetwork: ChartNetwork,
  chartScatter: ChartScatter,
  cloud: Cloud,
  code: Code2,
  coffee: Coffee,
  columns: Columns3,
  container: Container,
  cpu: Cpu,
  database: Database,
  databaseSearch: DatabaseSearch,
  databaseZap: DatabaseZap,
  diagram: ChartNetwork,
  eye: Eye,
  fileCode: FileCode2,
  fileDatabase: Database,
  flame: Flame,
  gitBranch: GitBranch,
  github: GitBranch,
  hash: Hash,
  layers: Layers,
  message: MessageSquareText,
  monitor: Monitor,
  network: Network,
  palette: Palette,
  panel: PanelTop,
  refresh: RefreshCw,
  rocket: Rocket,
  route: Route,
  router: Router,
  scan: ScanText,
  scanFace: ScanFace,
  scanText: ScanText,
  send: Send,
  server: Server,
  shuffle: Shuffle,
  sigma: Sigma,
  sliders: SlidersHorizontal,
  smartphone: Smartphone,
  sparkles: Sparkles,
  table: Table2,
  terminal: Terminal,
  trending: TrendingUp,
  users: Users,
  wand: WandSparkles,
  wifi: Wifi,
  workflow: Workflow,
  zap: Zap,
};

export default function SkillCard({ skill }) {
  const Icon = iconMap[skill.icon] ?? Code2;
  const width = levelWidths[skill.level] ?? levelWidths.intermediate;
  const logoUrl = skill.logoSrc ?? (skill.logo ? `https://cdn.simpleicons.org/${skill.logo}/${skill.logoColor}` : null);

  return (
    <motion.article
      className="skill-card"
      layout
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
    >
      <span className="skill-icon" style={{ color: skill.tone }} aria-hidden="true">
        {logoUrl ? <img src={logoUrl} alt="" loading="lazy" /> : <Icon size={30} strokeWidth={2.4} />}
      </span>
      <div className="skill-content">
        <h2>{skill.name}</h2>
        <div className="skill-meter" aria-label={`${skill.name} familiarity`}>
          <motion.span
            initial={{ width: 0 }}
            animate={{ width }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        </div>
      </div>
    </motion.article>
  );
}
