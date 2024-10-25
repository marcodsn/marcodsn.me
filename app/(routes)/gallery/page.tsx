"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { IconSearch, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { useState } from "react";

export default function GalleryPage() {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <div>
            <div className="p-4 space-y-4">
                <h1 className="text-2xl font-bold text-center mt-8">Button component</h1>
                <Button>Click me</Button>

                <Button
                    leftIcon={<IconSearch />}
                    rightIcon={<IconArrowRight />}
                >
                    Search
                </Button>

                <Button
                    isLoading
                    loadingText="Saving..."
                >
                    Save Changes
                </Button>

                <Button
                    variant="outline"
                    size="lg"
                    fullWidth
                >
                    Large Full Width
                </Button>

                <Button
                    leftIcon={<IconDownload />}
                    iconSpacing={12}
                >
                    Download
                </Button>
            </div>
            <div className="p-4 space-y-4">
                <h1 className="text-2xl font-bold text-center mt-8">Checkbox component</h1>
                <Checkbox label="Accept terms" defaultChecked={true} />

                <Checkbox
                    label="Subscribe to newsletter"
                    checked={isChecked}
                    onChange={(checked) => setIsChecked(checked)}
                />

                <Checkbox
                    label="Required field"
                    error={true}
                    onChange={(checked) => console.log('Checked:', checked)}
                />

                <Checkbox
                    label="Disabled option"
                    disabled={true}
                />
            </div>
        </div>
    );
}