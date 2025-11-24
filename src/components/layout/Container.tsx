export function Container({ children }: { children: React.ReactNode }) {
    return (
        <div className="mx-auto w-full max-w-container-max px-space-4 sm:px-space-6 lg:px-space-8">
            {children}
        </div>
    );
}
