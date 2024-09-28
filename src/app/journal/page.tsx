/* Namespaces */
import React from 'react';

/* Components */
import CategoryPageTemplate from '@/templates/CategoryPageTemplate/CategoryPageTemplate';

/* Utils */
import { Metadata } from 'next';
import { journalNavItems } from '@/scripts/getNavigationItems';

export const metadata: Metadata = {
  title: 'Journal',
};

const Journal: React.FunctionComponent<{}> = () => {
  return (
    <CategoryPageTemplate
      pageTitle="Journal: A Space for the Unbound."
      navigationItems={journalNavItems}
      showAll={false}
      category="Journal"
      postsToShow={6}
      postsToLoad={6}
    />
  );
};

export default Journal;
