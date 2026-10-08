import{n as e}from"./rolldown-runtime-8BhlS34s.js";import{g as t,t as n}from"./react-vendor-aZSMfLKR.js";import{g as r,h as i,l as a,n as o,t as s,u as c}from"./DocPage-9P1WMt4D.js";import{nt as l,rt as u}from"./io5-ChQeTV8D.js";var d,f,p,m,h,g;function _(){return(_=e((()=>{t(),l(),r(),o(),c(),d=n(),f=`// main.ts
import "@minerva/lib-web-components"; // or per element: ".../input", ".../select"
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";

bootstrapApplication(AppComponent);

// angular.json > projects > app > architect > build > options
// "styles": ["node_modules/@minerva/lib-web-components/dist/tokens.css", "src/styles.css"]`,p=`import { CUSTOM_ELEMENTS_SCHEMA, Component, signal } from "@angular/core";
import { toast } from "@minerva/lib-web-components/toast";

@Component({
  selector: "app-profile",
  // lets the template use unknown tags (<minerva-*>) and bind their properties
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <minerva-input
      aria-label="Name"
      [value]="name()"
      (minerva-input)="name.set($any($event).detail.value)"
    ></minerva-input>

    <minerva-select
      aria-label="Plan"
      [options]="plans"
      [value]="plan()"
      (minerva-change)="plan.set($any($event).detail.value)"
    ></minerva-select>

    <minerva-switch
      label="Email notifications"
      [checked]="notify()"
      (minerva-change)="notify.set($any($event).detail.checked)"
    ></minerva-switch>

    <!-- [attr.x] writes an attribute: aria-*, data-*, slot... -->
    <minerva-button [disabled]="!name()" [attr.aria-label]="saveLabel" (click)="save()">
      Save
    </minerva-button>
  \`,
})
export class ProfileComponent {
  name = signal("Ada");
  plan = signal("pro");
  notify = signal(true);
  saveLabel = "Save profile";
  plans = [
    { value: "free", label: "Free" },
    { value: "pro", label: "Pro" },
  ];

  save() {
    // toast() creates its <minerva-toast-region> on demand
    toast.success(\`Saved \${this.name()} (\${this.plan()} plan)\`);
  }
}`,m=`// minerva-value-accessor.ts: Angular forms (ngModel, formControl,
// formControlName) for the Minerva controls with a string value
import { Directive, ElementRef, HostListener, forwardRef, inject } from "@angular/core";
import { NG_VALUE_ACCESSOR, type ControlValueAccessor } from "@angular/forms";

type ValueElement = HTMLElement & { value: string; disabled: boolean };

@Directive({
  selector: \`minerva-input[ngModel], minerva-input[formControl], minerva-input[formControlName],
    minerva-textarea[ngModel], minerva-textarea[formControl], minerva-textarea[formControlName],
    minerva-select[ngModel], minerva-select[formControl], minerva-select[formControlName]\`,
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => MinervaValueAccessor), multi: true },
  ],
})
export class MinervaValueAccessor implements ControlValueAccessor {
  private readonly el = inject<ElementRef<ValueElement>>(ElementRef).nativeElement;
  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: string | null): void {
    this.el.value = value ?? ""; // programmatic: fires no event
  }
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  setDisabledState(disabled: boolean): void {
    this.el.disabled = disabled;
  }

  @HostListener("minerva-input", ["$event"])
  @HostListener("minerva-change", ["$event"])
  handle(event: CustomEvent<{ value: string }>): void {
    this.onChange(event.detail.value);
  }

  @HostListener("focusout")
  touched(): void {
    this.onTouched();
  }
}`,h=`import { CUSTOM_ELEMENTS_SCHEMA, Component } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { toast } from "@minerva/lib-web-components/toast";
import { MinervaValueAccessor } from "./minerva-value-accessor";

@Component({
  selector: "app-signup",
  imports: [ReactiveFormsModule, MinervaValueAccessor],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()">
      <label for="email">Email</label>
      <minerva-input id="email" formControlName="email" type="email"></minerva-input>
      <minerva-button type="submit" [disabled]="form.invalid">Sign up</minerva-button>
    </form>
  \`,
})
export class SignupComponent {
  form = new FormGroup({
    email: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.email] }),
  });

  submit() {
    const { email } = this.form.getRawValue();
    toast.success(\`Welcome, \${email}!\`);
  }
}`,g=()=>{let{t:e}=u(),t=t=>e(`docs.wc-angular.${t}`),n=(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(`section`,{className:a.section,"aria-labelledby":`setup`,children:[(0,d.jsx)(`h2`,{id:`setup`,children:t(`setup.title`)}),(0,d.jsx)(`p`,{className:a.prose,children:t(`setup.text`)}),(0,d.jsx)(i,{code:f,language:`ts`})]}),(0,d.jsxs)(`section`,{className:a.section,"aria-labelledby":`binding`,children:[(0,d.jsx)(`h2`,{id:`binding`,children:t(`binding.title`)}),(0,d.jsx)(`p`,{className:a.prose,children:t(`binding.text`)}),(0,d.jsx)(i,{code:p,language:`ts`}),(0,d.jsxs)(`ul`,{className:a.prose,children:[(0,d.jsx)(`li`,{children:t(`binding.properties`)}),(0,d.jsx)(`li`,{children:t(`binding.attributes`)}),(0,d.jsx)(`li`,{children:t(`binding.events`)})]})]}),(0,d.jsxs)(`section`,{className:a.section,"aria-labelledby":`forms`,children:[(0,d.jsx)(`h2`,{id:`forms`,children:t(`forms.title`)}),(0,d.jsx)(`p`,{className:a.prose,children:t(`forms.text`)}),(0,d.jsx)(i,{code:m,language:`ts`}),(0,d.jsx)(`p`,{className:a.prose,children:t(`forms.usage`)}),(0,d.jsx)(i,{code:h,language:`ts`}),(0,d.jsx)(`p`,{className:a.prose,children:t(`forms.checked`)}),(0,d.jsx)(`p`,{className:a.callout,children:t(`forms.native`)})]}),(0,d.jsxs)(`section`,{className:a.section,"aria-labelledby":`zones`,children:[(0,d.jsx)(`h2`,{id:`zones`,children:t(`zones.title`)}),(0,d.jsx)(`p`,{className:a.prose,children:t(`zones.text`)})]}),(0,d.jsxs)(`section`,{className:a.section,"aria-labelledby":`ssr`,children:[(0,d.jsx)(`h2`,{id:`ssr`,children:t(`ssr.title`)}),(0,d.jsx)(`p`,{className:a.prose,children:t(`ssr.text`)})]})]});return(0,d.jsx)(s,{id:`wc-angular`,intro:n})}})))()}_();export{g as default};