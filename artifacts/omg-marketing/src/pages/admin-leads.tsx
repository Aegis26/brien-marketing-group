import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
  getListContactLeadsQueryKey,
  useAdminLogin,
  useAdminLogout,
  useListContactLeads,
} from '@workspace/api-client-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AdminLeads() {
  const queryClient = useQueryClient();
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const leadsQuery = useListContactLeads({
    query: { queryKey: getListContactLeadsQueryKey(), retry: false },
  });
  const login = useAdminLogin();
  const logout = useAdminLogout();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoginError('');
    try {
      await login.mutateAsync({ data: { password } });
      setPassword('');
      await queryClient.invalidateQueries({ queryKey: getListContactLeadsQueryKey() });
    } catch {
      setLoginError('Incorrect password. Please try again.');
    }
  };

  const handleLogout = async () => {
    await logout.mutateAsync();
    queryClient.removeQueries({ queryKey: getListContactLeadsQueryKey() });
  };

  if (leadsQuery.isError) {
    return (
      <main className="min-h-screen bg-background px-4 py-20 text-foreground">
        <div className="mx-auto max-w-md border border-primary/30 bg-card p-8">
          <h1 className="font-display text-3xl font-black uppercase text-primary">Leads Admin</h1>
          <p className="mt-3 text-sm text-muted-foreground">Enter the admin password to view contact submissions.</p>
          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            <input
              type="text"
              name="username"
              value="admin"
              autoComplete="username"
              readOnly
              className="sr-only"
              tabIndex={-1}
              aria-hidden="true"
            />
            <Input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoFocus
              autoComplete="current-password"
              placeholder="Admin password"
              className="h-12 rounded-none border-primary/30 bg-background"
            />
            {loginError && <p role="alert" className="text-sm text-red-300">{loginError}</p>}
            <Button
              type="submit"
              disabled={login.isPending}
              className="h-12 w-full rounded-none bg-primary font-bold uppercase tracking-widest text-black"
            >
              {login.isPending ? 'Signing In...' : 'View Leads'}
            </Button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-4 py-12 text-foreground md:px-6">
      <div className="mx-auto max-w-6xl">
        <header className="flex flex-col gap-5 border-b border-primary/30 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-primary">O'Brien Marketing Group</p>
            <h1 className="mt-2 font-display text-4xl font-black uppercase md:text-5xl">Contact Leads</h1>
            <p className="mt-3 text-muted-foreground">
              {leadsQuery.data?.length ?? 0} submission{leadsQuery.data?.length === 1 ? '' : 's'}, newest first
            </p>
          </div>
          <Button onClick={handleLogout} disabled={logout.isPending} variant="outline" className="rounded-none border-primary/50">
            Sign Out
          </Button>
        </header>

        {leadsQuery.isPending ? (
          <p className="py-16 text-center text-muted-foreground">Loading leads...</p>
        ) : leadsQuery.data?.length === 0 ? (
          <div className="mt-10 border border-border bg-card p-12 text-center text-muted-foreground">No leads have been submitted yet.</div>
        ) : (
          <div className="mt-10 grid gap-5">
            {leadsQuery.data?.map((lead) => (
              <article key={lead.id} className="border border-border bg-card p-6 md:p-8">
                <div className="flex flex-col gap-2 border-b border-border pb-5 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-primary">{lead.name}</h2>
                    <a className="mt-1 inline-block text-foreground underline decoration-primary/50 underline-offset-4 hover:text-primary" href={`mailto:${lead.email}`}>
                      {lead.email}
                    </a>
                  </div>
                  <time className="text-sm text-muted-foreground" dateTime={lead.createdAt}>
                    {new Date(lead.createdAt).toLocaleString()}
                  </time>
                </div>
                <p className="mt-5 whitespace-pre-wrap leading-relaxed text-foreground/90">{lead.message}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}