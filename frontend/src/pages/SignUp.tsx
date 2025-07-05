function SignUp(){
  return(
    <div className="container mx-auto px-4 py-6 ">
        <div className="flex items-center justify-center px-4 py-8 ">
            <div className="rounded-xl border bg-card text-card-foreground shadow w-full max-w-md ">
                <div className="flex flex-col p-6 space-y-4 text-center">
                    <h3 className="tracking-tight text-3xl font-bold">Sign Up</h3>
                </div>
                <div className="p-6 pt-0 space-y-4">
                    <form className="space-y-4" aria-label="Sign up form">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                        <input type="text" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="name" placeholder="Enter Your Name" aria-label="Name" required/>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                        <input type="email" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="Enter Your Email" aria-label="Email address" required/>
                    </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">Password</label>
                            <div className="relative">
                                <input type="password" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="password" placeholder="Enter Your Password" aria-label="Password" required/>
                            </div>
                        </div>
                        <div className="space-y-2 pb-2">
                            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="confirm-password">Confirm Password</label>
                            <div className="relative">
                                <input type="password" className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" id="confirm-password" placeholder="Confirm Your Password" aria-label="Confirm password" required/>
                            </div>
                        </div>
                        <button className="bg-[#f66197] inline-flex items-center justify-center whitespace-nowrap border border-input cursor-pointer rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full" type="submit" aria-label="Sign up">Sign Up</button>
                    </form>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full"></div>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                        </div>
                    </div>
                    <button className="bg-[#f66197] inline-flex items-center justify-center whitespace-nowrap cursor-pointer rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 w-full" type="button">
                        <svg className="mr-2 h-4 w-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                            <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                        </svg>Continue with Google</button>
                </div>
                <div className="items-center p-6 pt-0 flex flex-col space-y-4">
                    <div className="text-sm text-muted-foreground text-center">Don't have an account? <a className="text-primary hover:underline" href="/login">Login</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default SignUp;