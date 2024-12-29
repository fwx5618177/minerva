import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Button,
} from "@minerva/lib-core";
import styles from "./index.module.scss";

const CardSection: React.FC = () => {
  return (
    <div className={styles.section}>
      <h3>Card Variants</h3>
      <div className={styles.group}>
        <Card variant="default">
          <CardHeader>
            <CardTitle>Default Card</CardTitle>
            <CardDescription>This is a default card.</CardDescription>
          </CardHeader>
          <CardContent bgColor="#e9ecef" textColor="#343a40">
            <p>Content goes here...</p>
          </CardContent>
          <CardFooter>
            <Button variant="primary">Action</Button>
          </CardFooter>
        </Card>

        <Card variant="outlined">
          <CardHeader>
            <CardTitle>Outlined Card</CardTitle>
            <CardDescription>This is an outlined card.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content goes here...</p>
          </CardContent>
          <CardFooter>
            <Button variant="primary">Action</Button>
          </CardFooter>
        </Card>

        <Card variant="shadow">
          <CardHeader>
            <CardTitle>Shadow Card</CardTitle>
            <CardDescription>This is a shadow card.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content goes here...</p>
          </CardContent>
          <CardFooter>
            <Button variant="primary">Action</Button>
          </CardFooter>
        </Card>

        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Elevated Card</CardTitle>
            <CardDescription>This is an elevated card.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content goes here...</p>
          </CardContent>
          <CardFooter>
            <Button variant="primary">Action</Button>
          </CardFooter>
        </Card>

        <Card variant="filled">
          <CardHeader>
            <CardTitle>Filled Card</CardTitle>
            <CardDescription>This is a filled card.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content goes here...</p>
          </CardContent>
          <CardFooter>
            <Button variant="primary">Action</Button>
          </CardFooter>
        </Card>
      </div>

      <h3>Card Types</h3>
      <div className={styles.group}>
        <Card type="noHeader">
          <CardContent bgColor="#e9ecef" textColor="#343a40">
            <p>Content goes here...</p>
          </CardContent>
          <CardFooter bgColor="#007bff" textColor="#ffffff">
            <Button variant="primary">Action</Button>
          </CardFooter>
        </Card>

        <Card type="noFooter">
          <CardHeader bgColor="#28a745" textColor="#ffffff">
            <CardTitle>No Footer Card</CardTitle>
            <CardDescription>This card has no footer.</CardDescription>
          </CardHeader>
          <CardContent bgColor="#d4edda" textColor="#155724">
            <p>Content goes here...</p>
          </CardContent>
        </Card>

        <Card type="noHeaderFooter" variant="elevated">
          <CardContent bgColor="#fff3cd" textColor="#856404">
            <div>
              <p>Content goes here...</p>
              <Button variant="primary">Action</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <h3>Card with Two-Column Layout</h3>
      <div className={styles.group}>
        <Card variant="shadow">
          <CardHeader>
            <CardTitle>Two-Column Card</CardTitle>
            <CardDescription>
              This card has a two-column layout.
            </CardDescription>
          </CardHeader>
          <CardContent className={styles.twoColumnLayout}>
            <div className={styles.imageColumn}>
              <img src="https://via.placeholder.com/150" alt="Placeholder" />
            </div>
            <div className={styles.textColumn}>
              <p>This is some text content next to an image.</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="primary">Action</Button>
          </CardFooter>
        </Card>
      </div>

      <h3>Card with Animation</h3>
      <div className={styles.group}>
        <Card variant="shadow">
          <CardHeader bgColor="#007bff" textColor="#ffffff">
            <CardTitle>Animated Card</CardTitle>
            <CardDescription>
              This card has a fade-in animation.
            </CardDescription>
          </CardHeader>
          <CardContent bgColor="#e9ecef" textColor="#343a40" animation="fadeIn">
            <p>Content goes here...</p>
          </CardContent>
          <CardFooter bgColor="#007bff" textColor="#ffffff">
            <Button variant="primary">Action</Button>
          </CardFooter>
        </Card>

        <Card variant="shadow">
          <CardHeader bgColor="#28a745" textColor="#ffffff">
            <CardTitle>Animated Card</CardTitle>
            <CardDescription>
              This card has a slide-in animation.
            </CardDescription>
          </CardHeader>
          <CardContent
            bgColor="#d4edda"
            textColor="#155724"
            animation="slideIn"
          >
            <p>Content goes here...</p>
          </CardContent>
          <CardFooter bgColor="#28a745" textColor="#ffffff">
            <Button variant="primary">Action</Button>
          </CardFooter>
        </Card>

        <Card variant="shadow">
          <CardHeader bgColor="#17a2b8" textColor="#ffffff">
            <CardTitle>Animated Card</CardTitle>
            <CardDescription>
              This card has a zoom-in animation.
            </CardDescription>
          </CardHeader>
          <CardContent bgColor="#d1ecf1" textColor="#0c5460" animation="zoomIn">
            <p>Content goes here...</p>
          </CardContent>
          <CardFooter bgColor="#17a2b8" textColor="#ffffff">
            <Button variant="primary">Action</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CardSection;
