import { createElement, type ComponentType } from "react";
import type { CareIconName } from "@/lib/types";
import {
  SkinIcon,
  HairIcon,
  LungsIcon,
  JointIcon,
  WellnessIcon,
  KidneyIcon,
  SpineIcon,
  BackPainIcon,
  DiscreetCareIcon,
  PrivacyShieldIcon,
  DropletIcon,
  FollicleIcon,
  LaserIcon,
  WaterDropIcon,
  PeelIcon,
  MesotherapyIcon,
  LaserHairRemovalIcon,
  PainPulseIcon,
  StiffnessIcon,
  MovementIcon,
  RadiatingIcon,
  ClockIcon,
  SittingIcon,
  PostureIcon,
  StrainIcon,
  RepetitiveIcon,
  InjuryIcon,
  StressIcon,
  DietIcon,
  WeatherIcon,
  HormoneIcon,
  SleepIcon,
  AlertIcon,
  BreathIcon,
  SwellingIcon,
  ItchIcon,
  FatigueIcon,
  StomachIcon,
  HeadIcon,
  ListenIcon,
  ChartIcon,
} from "./care-icons";

type IconComponent = ComponentType<{ className?: string }>;

/**
 * String-keyed icon lookup so condition data files stay free of JSX and
 * remain plain serialisable objects.
 */
export const careIcons: Record<string, IconComponent> = {
  skin: SkinIcon,
  hair: HairIcon,
  lungs: LungsIcon,
  joint: JointIcon,
  wellness: WellnessIcon,
  kidney: KidneyIcon,
  spine: SpineIcon,
  back: BackPainIcon,
  discreet: DiscreetCareIcon,
  privacy: PrivacyShieldIcon,
  droplet: DropletIcon,
  follicle: FollicleIcon,
  laser: LaserIcon,
  water: WaterDropIcon,
  peel: PeelIcon,
  mesotherapy: MesotherapyIcon,
  laserHairRemoval: LaserHairRemovalIcon,
  pain: PainPulseIcon,
  stiffness: StiffnessIcon,
  movement: MovementIcon,
  radiating: RadiatingIcon,
  clock: ClockIcon,
  sitting: SittingIcon,
  posture: PostureIcon,
  strain: StrainIcon,
  repetitive: RepetitiveIcon,
  injury: InjuryIcon,
  stress: StressIcon,
  diet: DietIcon,
  weather: WeatherIcon,
  hormone: HormoneIcon,
  sleep: SleepIcon,
  alert: AlertIcon,
  breath: BreathIcon,
  swelling: SwellingIcon,
  itch: ItchIcon,
  fatigue: FatigueIcon,
  stomach: StomachIcon,
  head: HeadIcon,
  listen: ListenIcon,
  chart: ChartIcon,
};

/** Falls back to a neutral clinical mark so an unknown key never crashes. */
export function getCareIcon(name: CareIconName | undefined): IconComponent {
  return (name && careIcons[name]) || DiscreetCareIcon;
}

/**
 * Renders a registry icon by name. Uses createElement rather than assigning
 * the looked-up component to a capitalised variable in render, which keeps
 * the lookup out of React's "component created during render" pattern.
 */
export function CareIcon({ name, className }: { name?: CareIconName; className?: string }) {
  return createElement(getCareIcon(name), { className });
}
