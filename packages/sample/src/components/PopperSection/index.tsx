import React, { useState, useRef } from "react";
import { Popper, Button } from "@minerva/lib-core";
import type {
  PopperPlacement,
  PopperVariant,
  PopperType,
} from "@minerva/lib-core";
import styles from "./index.module.scss";

const PopperSection: React.FC = () => {
  const [activePopper, setActivePopper] = useState<string | null>(null);

  // Store button refs in an object
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  // Toggle function
  const handlePopperToggle = (id: string) => {
    setActivePopper((prev) => (prev === id ? null : id));
  };

  // List of placements
  const placements: PopperPlacement[] = [
    "top",
    "topStart",
    "topEnd",
    "bottom",
    "bottomStart",
    "bottomEnd",
    "left",
    "leftStart",
    "leftEnd",
    "right",
    "rightStart",
    "rightEnd",
  ];

  // List of variants
  const variants: PopperVariant[] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
  ];

  // List of types
  const types: PopperType[] = [
    "popover",
    "menu",
    "dropdown",
    "select",
    "autocomplete",
    "datepicker",
    "colorpicker",
    "cascader",
  ];

  // Basic usage
  const [isBasicOpen, setIsBasicOpen] = useState(false);
  const basicBtnRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className={styles.section}>
      <h3>Basic Usage</h3>
      <div className={styles.group}>
        <div className={styles.demoContainer}>
          <Button
            ref={basicBtnRef}
            onClick={() => setIsBasicOpen((prev) => !prev)}
          >
            {isBasicOpen ? "Close" : "Open"} Basic Popper
          </Button>
          <Popper
            open={isBasicOpen}
            anchorEl={basicBtnRef.current}
            onClickAway={() => setIsBasicOpen(false)}
            content="Basic popper content"
          >
            <div className={styles.popperContent}>
              This is a basic popper example
            </div>
          </Popper>
        </div>
      </div>

      <h3>Placement</h3>
      <div className={styles.group}>
        <div className={styles.placementGrid}>
          {placements.map((placement) => (
            <div key={placement} className={styles.demoContainer}>
              <Button
                ref={(el) =>
                  (buttonRefs.current[`placement-${placement}`] = el)
                }
                onClick={() => handlePopperToggle(`placement-${placement}`)}
              >
                {placement}
              </Button>
              <Popper
                open={activePopper === `placement-${placement}`}
                anchorEl={buttonRefs.current[`placement-${placement}`]}
                placement={placement}
                arrow
                onClickAway={() => setActivePopper(null)}
              >
                <div className={styles.popperContent}>
                  Placement: {placement}
                </div>
              </Popper>
            </div>
          ))}
        </div>
      </div>

      <h3>Animation & Offset</h3>
      <div className={styles.group}>
        <div className={styles.demoContainer}>
          <Button
            ref={(el) => (buttonRefs.current["animation-fast"] = el)}
            onClick={() => handlePopperToggle("animation-fast")}
          >
            Fast Animation
          </Button>
          <Popper
            open={activePopper === "animation-fast"}
            anchorEl={buttonRefs.current["animation-fast"]}
            animation={{ duration: 100, easing: "ease-out" }}
            onClickAway={() => setActivePopper(null)}
            content="Fast animation"
          />
        </div>

        <div className={styles.demoContainer}>
          <Button
            ref={(el) => (buttonRefs.current["animation-slow"] = el)}
            onClick={() => handlePopperToggle("animation-slow")}
          >
            Slow Animation
          </Button>
          <Popper
            open={activePopper === "animation-slow"}
            anchorEl={buttonRefs.current["animation-slow"]}
            animation={{ duration: 500, easing: "ease-in-out" }}
            onClickAway={() => setActivePopper(null)}
            content="Slow animation"
          />
        </div>

        <div className={styles.demoContainer}>
          <Button
            ref={(el) => (buttonRefs.current["offset-large"] = el)}
            onClick={() => handlePopperToggle("offset-large")}
          >
            Large Offset
          </Button>
          <Popper
            open={activePopper === "offset-large"}
            anchorEl={buttonRefs.current["offset-large"]}
            offset={{ x: 20, y: 20 }}
            onClickAway={() => setActivePopper(null)}
            content="Large offset"
          />
        </div>
      </div>

      <h3>Variants</h3>
      <div className={styles.group}>
        {variants.map((variant) => (
          <div key={variant} className={styles.demoContainer}>
            <Button
              ref={(el) => (buttonRefs.current[`variant-${variant}`] = el)}
              onClick={() => handlePopperToggle(`variant-${variant}`)}
              variant={variant as any}
            >
              {variant}
            </Button>
            <Popper
              open={activePopper === `variant-${variant}`}
              anchorEl={buttonRefs.current[`variant-${variant}`]}
              onClickAway={() => setActivePopper(null)}
              variant={variant}
              content={`${variant} variant`}
            />
          </div>
        ))}
      </div>

      <h3>Types</h3>
      <div className={styles.group}>
        {types.map((type) => (
          <div key={type} className={styles.demoContainer}>
            <Button
              ref={(el) => (buttonRefs.current[`type-${type}`] = el)}
              onClick={() => handlePopperToggle(`type-${type}`)}
            >
              {type}
            </Button>
            <Popper
              open={activePopper === `type-${type}`}
              anchorEl={buttonRefs.current[`type-${type}`]}
              onClickAway={() => setActivePopper(null)}
              type={type}
            >
              <div className={styles.typeContent}>
                {type === "menu" && (
                  <div className={styles.menuItems}>
                    <div className={styles.menuItem}>Menu Item 1</div>
                    <div className={styles.menuItem}>Menu Item 2</div>
                    <div className={styles.menuItem}>Menu Item 3</div>
                  </div>
                )}
                {type === "select" && (
                  <div className={styles.selectItems}>
                    <div className={styles.selectItem}>Option 1</div>
                    <div className={styles.selectItem}>Option 2</div>
                    <div className={styles.selectItem}>Option 3</div>
                  </div>
                )}
                {type === "datepicker" && (
                  <div className={styles.datepickerContent}>
                    Date Picker Content
                  </div>
                )}
                {[
                  "popover",
                  "dropdown",
                  "autocomplete",
                  "colorpicker",
                  "cascader",
                ].includes(type) && `${type} content`}
              </div>
            </Popper>
          </div>
        ))}
      </div>

      <h3>Edge Cases</h3>
      <div className={styles.edgeCases}>
        {/* Overflow container */}
        <h4>Overflow Container</h4>
        <div className={styles.overflowContainer}>
          {/* Even if parent is overflow: hidden,
              Popper uses position: fixed,
              so it won't be clipped. */}
          <div className={styles.demoContainer}>
            <Button
              ref={(el) => (buttonRefs.current["overflow"] = el)}
              onClick={() => handlePopperToggle("overflow")}
            >
              Overflow Test
            </Button>
            <Popper
              open={activePopper === "overflow"}
              anchorEl={buttonRefs.current["overflow"]}
              onClickAway={() => setActivePopper(null)}
              content="Testing overflow behavior"
            />
          </div>
        </div>

        {/* Scroll container */}
        <h4>Scroll Container</h4>
        <div className={styles.scrollContainer}>
          <div className={styles.scrollContent}>
            <div className={styles.demoContainer}>
              <Button
                ref={(el) => (buttonRefs.current["scroll"] = el)}
                onClick={() => handlePopperToggle("scroll")}
              >
                Scroll Test
              </Button>
              <Popper
                open={activePopper === "scroll"}
                anchorEl={buttonRefs.current["scroll"]}
                onClickAway={() => setActivePopper(null)}
                content="Testing scroll behavior"
              />
            </div>
          </div>
        </div>

        {/* Nested Poppers */}
        <h4>Nested Poppers</h4>
        <div className={styles.demoContainer}>
          <Button
            ref={(el) => (buttonRefs.current["nested-1"] = el)}
            onClick={() => handlePopperToggle("nested-1")}
          >
            Nested Poppers
          </Button>
          <Popper
            open={activePopper === "nested-1"}
            anchorEl={buttonRefs.current["nested-1"]}
            onClickAway={() => setActivePopper(null)}
          >
            <div style={{ padding: "8px" }}>
              <div>This is the first level popper</div>
              <Button
                ref={(el) => (buttonRefs.current["nested-2"] = el)}
                onClick={() => handlePopperToggle("nested-2")}
                style={{ marginTop: 8 }}
              >
                Open Nested
              </Button>
              <Popper
                open={activePopper === "nested-2"}
                anchorEl={buttonRefs.current["nested-2"]}
                onClickAway={() => setActivePopper(null)}
                content="Nested popper content"
              />
            </div>
          </Popper>
        </div>
      </div>

      <h3>Z-Index & Focus Management</h3>
      <div className={styles.group}>
        <div className={styles.demoContainer}>
          <Button
            ref={(el) => (buttonRefs.current["zindex-high"] = el)}
            onClick={() => handlePopperToggle("zindex-high")}
          >
            High Z-Index
          </Button>
          <Popper
            open={activePopper === "zindex-high"}
            anchorEl={buttonRefs.current["zindex-high"]}
            zIndex={2000}
            content="High z-index"
            onClickAway={() => setActivePopper(null)}
          />
        </div>

        <div className={styles.demoContainer}>
          <Button
            ref={(el) => (buttonRefs.current["focus-trap"] = el)}
            onClick={() => handlePopperToggle("focus-trap")}
          >
            Focus Management
          </Button>
          <Popper
            open={activePopper === "focus-trap"}
            anchorEl={buttonRefs.current["focus-trap"]}
            tabIndex={0}
            onClickAway={() => setActivePopper(null)}
            content={
              <div>
                <p>Focusable content inside popper</p>
                <input type="text" placeholder="Focus me" />
              </div>
            }
          />
        </div>
      </div>

      <h3>Accessibility</h3>
      <div className={styles.group}>
        <div className={styles.demoContainer}>
          <Button
            ref={(el) => (buttonRefs.current["aria-label"] = el)}
            onClick={() => handlePopperToggle("aria-label")}
          >
            With ARIA Label
          </Button>
          <Popper
            open={activePopper === "aria-label"}
            anchorEl={buttonRefs.current["aria-label"]}
            ariaLabel="Accessible popper"
            onClickAway={() => setActivePopper(null)}
            content="With ARIA label"
          />
        </div>
      </div>
    </div>
  );
};

export default PopperSection;
