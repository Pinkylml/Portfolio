import { Card as UiCard, CardContent as UiCardContent } from '@/components/ui/card';

const Card = ({ children }) => <UiCard>{children}</UiCard>;
const CardContent = ({ children, className }) => <UiCardContent className={className}>{children}</UiCardContent>;

export { Card, CardContent };
