function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center p-8 gap-4">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600 shadow-sm" />
      <p className="text-sm font-medium text-slate-500 animate-pulse">
        Loading data...
      </p>
    </div>
  );
}

export default LoadingSpinner;