import * as Sheet from "@radix-ui/react-dialog";

const MobileMenu = () => {
  return (
    <Sheet.Root>
      <Sheet.Trigger asChild>
        <button className="md:hidden text-sm">Nav</button>
      </Sheet.Trigger>
      <Sheet.Portal>
        <Sheet.Overlay className="fixed inset-0 bg-black/50" />
        <Sheet.Content className="fixed inset-y-0 left-0 w-64 bg-background p-4">
          {/* Same content as SidePanel */}
          <div className="space-y-4">
            {/* Reuse the same menuItems structure */}
          </div>
        </Sheet.Content>
      </Sheet.Portal>
    </Sheet.Root>
  );
};

export default MobileMenu;
