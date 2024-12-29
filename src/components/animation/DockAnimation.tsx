"use client";

import { type SpringOptions, AnimatePresence } from "framer-motion";

const DOCK_HEIGHT = 128;
const DEFAULT_MAGNIFICATION = 80;
const DEFAULT_DISTANCE = 150;
const DEFAULT_PANEL_HEIGHT = 64;

type DockProps = {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  panelHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
};

type DockItemProps = {
    className?: string;
    children?: React.ReactNode;
}

type DockLabelProos = {
    className?: string;
    children?: React.ReactNode;
};

type DockIconProps = {
    className?: string;
    children?: React.ReactNode;
}