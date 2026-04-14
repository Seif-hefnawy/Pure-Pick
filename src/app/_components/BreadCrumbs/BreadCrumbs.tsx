import Link from "next/link";

// هنا بنحدد الداتا اللي الكومبوننت محتاجها عشان يشتغل
interface BreadcrumbStep {
  label: string;
  href?: string; // اختياري عشان آخر كلمة متبقاش لينك
}

interface BreadcrumbsProps {
  steps: BreadcrumbStep[];
}

export default function Breadcrumbs({ steps }: BreadcrumbsProps) {
  return (
    <div className="max-w-7xl mx-auto px-8 py-6">
      <nav className="flex text-xs font-medium uppercase tracking-widest text-outline">
        {/* كلمة Home ثابتة دايماً */}
        <Link className="hover:text-primary text-on-surface" href="/">
          Home
        </Link>

        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <span className="mx-3 text-on-surface">/</span>
            {step.href ? (
              <Link className="hover:text-primary text-on-surface" href={step.href}>
                {step.label}
              </Link>
            ) : (
              <span className="text-primary">{step.label}</span>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}