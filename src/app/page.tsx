import BranchSection from "@/components/BranchSection";
import Hero from "@/components/Hero";
import LogSection from "@/components/LogSection";
import RemoteSection from "@/components/RemoteSection";
import StashSection from "@/components/StashSection";
import StatusSection from "@/components/StatusSection";

/**
 * One page, read top to bottom like a repository:
 *   whoami → git status → git log → git branch → git stash → git remote
 *
 * All copy lives in src/content/*. Nothing on this page is hardcoded.
 */
export default function Page() {
  return (
    <>
      <Hero />
      <StatusSection />
      <LogSection />
      <BranchSection />
      <StashSection />
      <RemoteSection />
    </>
  );
}
