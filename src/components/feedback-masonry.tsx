import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { MagnifyingGlassPlus, WhatsappLogo } from "@phosphor-icons/react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { fadeUp, viewport } from "@/lib/motion";

export type FeedbackShot = { src: string; alt: string };

function MasonryItem({
  src,
  alt,
  index,
  onOpen,
  reduced,
}: FeedbackShot & { index: number; onOpen: () => void; reduced: boolean }) {
  return (
    <motion.button
      type="button"
      variants={reduced ? undefined : fadeUp}
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? undefined : "show"}
      viewport={viewport}
      transition={{ delay: index * 0.05 }}
      onClick={onOpen}
      className="feedback-masonry-item group relative w-full overflow-hidden rounded-sm border border-[#2a2a2a] bg-[#0d1117] text-left hover:border-[#cc1f1f]/55 hover:shadow-[0_8px_32px_rgba(204,31,31,0.12)] transition-[border-color,box-shadow] duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cc1f1f]"
      aria-label={`Ampliar: ${alt}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="block w-full h-auto"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 bg-black/75 backdrop-blur-sm border border-white/10 px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <WhatsappLogo size={12} weight="fill" className="text-[#25D366]" />
        <span className="text-[8px] font-mono uppercase tracking-[0.15em] text-white/80">Mentoria</span>
      </div>
      <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 bg-black/75 backdrop-blur-sm border border-white/10 px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <MagnifyingGlassPlus size={12} className="text-white" />
        <span className="text-[8px] font-mono uppercase tracking-wider text-white">Ampliar</span>
      </div>
    </motion.button>
  );
}

export function FeedbackMasonry({ shots }: { shots: FeedbackShot[] }) {
  const [selected, setSelected] = useState<string | null>(null);
  const reduced = useReducedMotion() ?? false;

  return (
    <>
      <div className="feedback-masonry">
        {shots.map((item, i) => (
          <MasonryItem
            key={item.src}
            {...item}
            index={i}
            reduced={reduced}
            onOpen={() => setSelected(item.src)}
          />
        ))}
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-2xl w-[calc(100%-2rem)] border-[#2a2a2a] bg-[#0d0d0d] p-2 sm:p-3">
          {selected && (
            <img
              src={selected}
              alt="Feedback ampliado"
              decoding="async"
              className="w-full rounded-sm max-h-[85vh] object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
