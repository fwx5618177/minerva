import React from "react";
import styles from "./index.module.scss";
import {
  Dropdown,
  DropdownOption,
  SearchButton,
  Button,
} from "@minerva/lib-core";

const DropdownSection: React.FC = () => {
  return (
    <div className={styles.section}>
      <h3>Dropdown direction</h3>
      <div className={styles.group}>
        <Dropdown
          items={
            [
              { label: "Option 1", value: "option1" },
              { label: "Option 2", value: "option2" },
              { label: "Option 3", value: "option3" },
              { label: "Option 4", value: "option4" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
              { label: "Option 5", value: "option5" },
            ] as DropdownOption[]
          }
          onSelect={(item: DropdownOption) => console.log("Selected:", item)}
          direction="down"
        />
        <Dropdown
          items={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
            { label: "Option 4", value: "option4" },
            { label: "Option 5", value: "option5" },
          ]}
          onSelect={(item: DropdownOption) => console.log("Selected:", item)}
          direction="up"
        />
        <Dropdown
          items={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
            { label: "Option 4", value: "option4" },
            { label: "Option 5", value: "option5" },
          ]}
          onSelect={(item: DropdownOption) => console.log("Selected:", item)}
          direction="left"
        />
        <Dropdown
          items={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
            { label: "Option 4", value: "option4" },
            { label: "Option 5", value: "option5" },
          ]}
          onSelect={(item: DropdownOption) => console.log("Selected:", item)}
          direction="right"
        />
      </div>

      <h3>Dropdown Menu Background Color</h3>
      <div className={styles.group}>
        <Dropdown
          items={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
            { label: "Option 4", value: "option4" },
            { label: "Option 5", value: "option5" },
            { label: "Option 5", value: "option5" },
            { label: "Option 5", value: "option5" },
            { label: "Option 5", value: "option5" },
            { label: "Option 5", value: "option5" },
            { label: "Option 5", value: "option5" },
            { label: "Option 5", value: "option5" },
            { label: "Option 5", value: "option5" },
          ]}
          onSelect={(item: DropdownOption) => console.log("Selected:", item)}
          menuBgColor="#000000"
          menuTextColor="#ffffff"
        />
        <Dropdown
          items={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
            { label: "Option 4", value: "option4" },
            { label: "Option 5", value: "option5" },
          ]}
          onSelect={(item: DropdownOption) => console.log("Selected:", item)}
          menuBgColor="#ff0000"
          menuTextColor="#ffffff"
        />
      </div>

      <h3>Dropdown Children, Disabled</h3>
      <div className={styles.group}>
        <Dropdown
          items={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
            { label: "Option 4", value: "option4" },
            { label: "Option 5", value: "option5" },
          ]}
          onSelect={(item: DropdownOption) => console.log("Selected:", item)}
        >
          <span>Dropdown</span>
        </Dropdown>

        <Dropdown
          items={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
            { label: "Option 4", value: "option4" },
            { label: "Option 5", value: "option5" },
          ]}
          onSelect={(item: DropdownOption) => console.log("Selected:", item)}
        >
          <SearchButton />
        </Dropdown>

        <Dropdown
          items={[
            { label: "Option 1", value: "option1" },
            { label: "Option 2", value: "option2" },
            { label: "Option 3", value: "option3" },
            { label: "Option 4", value: "option4" },
            { label: "Option 5", value: "option5" },
          ]}
          onSelect={(item: DropdownOption) => console.log("Selected:", item)}
        >
          <Button borderRadius="circle">Menu</Button>
        </Dropdown>

        <Dropdown
          items={[
            { label: "Option 1", value: "option1" },
            {
              label: "Option 2",
              value: "option2",
              disabled: true,
            },
            { label: "Option 3", value: "option3" },
            { label: "Option 4", value: "option4" },
            { label: "Option 5", value: "option5" },
          ]}
          menuBgColor="#ff0000"
          menuTextColor="#ffffff"
          onSelect={(item: {
            label: string;
            value: string;
            disabled?: boolean;
          }) => console.log("Selected:", item)}
        >
          <Button variant="warning" borderRadius="circle">
            Menu
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default DropdownSection;
