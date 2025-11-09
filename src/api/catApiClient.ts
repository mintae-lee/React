const CAT_API_BASE_URL =
  process.env.REACT_APP_CAT_API_BASE_URL ?? 'https://api.thecatapi.com/v1/images/search';

const CAT_API_KEY = process.env.REACT_APP_CAT_API_KEY;

type QueryValue = string | number | boolean | undefined | null;

type QueryParams = Record<string, QueryValue | QueryValue[]>;

interface CatApiRequestOptions extends Omit<RequestInit, 'body'> {
  query?: QueryParams;
  body?: BodyInit | Record<string, unknown> | null;
}

const appendQueryParams = (url: URL, query?: QueryParams) => {
  if (!query) {
    return;
  }

  Object.entries(query).forEach(([key, value]) => {
    if (value === undefined || value === null) {
      return;
    }

    const values = Array.isArray(value) ? value : [value];
    values.forEach((item) => {
      url.searchParams.append(key, String(item));
    });
  });
};

export async function catApiRequest<T>(
  path: string,
  options: CatApiRequestOptions = {},
): Promise<T> {
  const { query, body, headers, ...rest } = options;

  const url = new URL(path, CAT_API_BASE_URL);
  appendQueryParams(url, query);

  const init: RequestInit = {
    method: 'GET',
    ...rest,
    headers: {
      ...(CAT_API_KEY ? { 'x-api-key': CAT_API_KEY } : {}),
      ...headers,
    },
  };

  if (body !== undefined && body !== null) {
    if (
      typeof body === 'object' &&
      !(body instanceof FormData) &&
      !(body instanceof Blob)
    ) {
      init.body = JSON.stringify(body);
      init.headers = {
        'Content-Type': 'application/json',
        ...init.headers,
      };
    } else {
      init.body = body as BodyInit;
    }
  }

  const response = await fetch(url.toString(), init);

  if (!response.ok) {
    const errorBody = await response.text().catch(() => '');
    throw new Error(
      `Cat API request failed (${response.status}): ${
        errorBody || response.statusText
      }`,
    );
  }

  const contentLength = response.headers.get('content-length');
  if (contentLength === '0' || response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}

export const catApiConfig = {
  baseUrl: CAT_API_BASE_URL,
  hasApiKey: Boolean(CAT_API_KEY),
};

export type { CatApiRequestOptions };
