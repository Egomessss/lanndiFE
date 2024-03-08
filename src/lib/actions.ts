import { addDomainToVercel, validDomainRegex } from '@/lib/domains';

const API_BASE_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1`;

export type SiteData = {
  id: number
  customDomain: string
  subdomain: string
};


export const updateSite = async (formData: FormData, site: SiteData, key: string) => {
  const value = formData.get(key) as string;

  try {
    let payload = {};

    if (key === 'customDomain') {
      if (value.includes('vercel.pub')) {
        return { error: 'Cannot use vercel.pub subdomain as your custom domain' };
      } else if (validDomainRegex.test(value) || value === '') {
        const response = await fetch(`${API_BASE_URL}/${site.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers like authentication tokens here
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error('Failed to update site');
        }
      }
    }


    // After updating the site successfully, particularly for customDomain changes
    if (key === 'customDomain' && validDomainRegex.test(value)) {
      await Promise.all([
        addDomainToVercel(value),
        // Optionally, add www subdomain as well
        // addDomainToVercel(`www.${value}`),
      ]);
    }

    const updatedSite = await response.json();

    // Optionally, revalidate tags as before
    console.log(
      'Updated site data! Revalidating tags:',
      `${site.subdomain}.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}-metadata`,
      `${site.customDomain}-metadata`,
    );

    // Revalidate tags logic here

    return updatedSite;
  } catch (error) {
    console.error('Error updating site:', error);
    return { error: error.message || 'An error occurred' };
  }
};