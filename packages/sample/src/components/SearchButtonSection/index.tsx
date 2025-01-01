import React from "react";
import { SearchButton } from "@minerva/lib-core";
import styles from "./index.module.scss";

const SearchButtonSection: React.FC = () => {
  const handleSearchClick = () => {
    console.log("Search button clicked");
  };

  return (
    <div className={styles.section}>
      <h3>SearchButton</h3>
      <p>
        A button component with a search icon, used for search functionality.
      </p>

      <h3>Search Button Sizes</h3>
      <div className={styles.group}>
        <SearchButton size="small" />
        <SearchButton size="medium" />
        <SearchButton size="large" />
      </div>

      <h3>Search Button States</h3>
      <div className={styles.group}>
        <SearchButton disabled />
        <SearchButton loading />
        <SearchButton active />
      </div>

      <h3>Search Button Shapes</h3>
      <div className={styles.group}>
        <SearchButton shape="square" />
        <SearchButton shape="rounded" />
        <SearchButton shape="circle" />
      </div>

      <h3>Custom Styles</h3>
      <div className={styles.group}>
        <SearchButton
          bgColor="#6200ee"
          textColor="#ffffff"
          hoverBgColor="#3700b3"
        />
        <SearchButton
          borderRadius="20px"
          borderColor="#2196f3"
          borderWidth="2px"
        />
      </div>

      <h3>Search Text</h3>
      <div className={styles.group}>
        <SearchButton onClick={handleSearchClick}>Search</SearchButton>
        <SearchButton onClick={handleSearchClick} variant="error">
          Search
        </SearchButton>
        <SearchButton onClick={handleSearchClick} variant="warning">
          Search
        </SearchButton>
        <SearchButton onClick={handleSearchClick} variant="success">
          Search
        </SearchButton>
        <SearchButton onClick={handleSearchClick} variant="info">
          Search
        </SearchButton>
        <SearchButton onClick={handleSearchClick} shape="square">
          Search
        </SearchButton>
        <SearchButton onClick={handleSearchClick} shape="rounded">
          Search
        </SearchButton>
        <SearchButton onClick={handleSearchClick} animation="expand">
          Search
        </SearchButton>
        <SearchButton onClick={handleSearchClick} animation="shrink">
          Search
        </SearchButton>
        <SearchButton onClick={handleSearchClick} disabled>
          Search
        </SearchButton>
      </div>
      <h3>Search Text Size</h3>
      <div className={styles.group}>
        <SearchButton onClick={handleSearchClick} size="small">
          Search
        </SearchButton>
        <SearchButton onClick={handleSearchClick} size="medium">
          Search
        </SearchButton>
        <SearchButton onClick={handleSearchClick} size="large">
          Search
        </SearchButton>
        <SearchButton onClick={handleSearchClick} size="xlarge">
          Search
        </SearchButton>
        <SearchButton onClick={handleSearchClick}>Search</SearchButton>
      </div>
      <h3>Search Text Color</h3>
      <div className={styles.group}>
        <SearchButton onClick={handleSearchClick} color="#fff">
          Text
        </SearchButton>
        <SearchButton onClick={handleSearchClick} color="#000">
          Test case
        </SearchButton>
      </div>
      <h3>Search variant</h3>
      <div className={styles.group}>
        <SearchButton onClick={handleSearchClick} />
        <SearchButton onClick={handleSearchClick} variant="error" />
        <SearchButton onClick={handleSearchClick} variant="warning" />
        <SearchButton onClick={handleSearchClick} variant="success" />
        <SearchButton onClick={handleSearchClick} variant="info" />
        <SearchButton onClick={handleSearchClick} disabled iconColor="#fff" />
      </div>
      <h3>Search Shape</h3>
      <div className={styles.group}>
        <SearchButton onClick={handleSearchClick} shape="square" />
        <SearchButton onClick={handleSearchClick} shape="rounded" />
        <SearchButton onClick={handleSearchClick} shape="circle" />
      </div>
      <h3>Search Animation</h3>
      <div className={styles.group}>
        <SearchButton onClick={handleSearchClick} />
        <SearchButton onClick={handleSearchClick} animation="none" />
        <SearchButton onClick={handleSearchClick} animation="expand" />
        <SearchButton onClick={handleSearchClick} animation="shrink" />
        <SearchButton onClick={handleSearchClick} animation="shake" />
      </div>
      <h3>Search Size</h3>
      <div className={styles.group}>
        <SearchButton onClick={handleSearchClick} size="small" />
        <SearchButton onClick={handleSearchClick} size="medium" />
        <SearchButton onClick={handleSearchClick} size="large" />
        <SearchButton onClick={handleSearchClick} size="xlarge" />
        <SearchButton onClick={handleSearchClick} />
      </div>
      <h3>Search Icon Color</h3>
      <div className={styles.group}>
        <SearchButton onClick={handleSearchClick} iconColor="#000000" />
        <SearchButton onClick={handleSearchClick} iconColor="#ff0000" />
        <SearchButton onClick={handleSearchClick} iconColor="#00ff00" />
        <SearchButton onClick={handleSearchClick} iconColor="#0000ff" />
      </div>
      <h3>Search Background Color</h3>
      <div className={styles.group}>
        <SearchButton onClick={handleSearchClick} bgColor="#000000" />
        <SearchButton onClick={handleSearchClick} bgColor="#ff0000" />
        <SearchButton onClick={handleSearchClick} bgColor="#00ff00" />
        <SearchButton onClick={handleSearchClick} bgColor="#0000ff" />
      </div>
      <h3>Search Loading</h3>
      <div className={styles.group}>
        <SearchButton onClick={handleSearchClick} loading />
        <SearchButton onClick={handleSearchClick} loading variant="error" />
        <SearchButton onClick={handleSearchClick} loading variant="warning" />
        <SearchButton onClick={handleSearchClick} loading variant="success" />
        <SearchButton onClick={handleSearchClick} loading variant="info" />
        <SearchButton
          onClick={handleSearchClick}
          loading
          disabled
          iconColor="#000"
        />
      </div>

      <h3>Search Button Variants</h3>
      <div className={styles.group}>
        <SearchButton onClick={handleSearchClick} />
        <SearchButton variant="primary" />
        <SearchButton variant="secondary" />
        <SearchButton variant="success" onClick={handleSearchClick} />
        <SearchButton variant="warning" onClick={handleSearchClick} />
        <SearchButton variant="error" onClick={handleSearchClick} />
      </div>
    </div>
  );
};

export default SearchButtonSection;
