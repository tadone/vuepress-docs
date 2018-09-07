(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{162:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"general-info"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-info","aria-hidden":"true"}},[t._v("#")]),t._v(" General Info")]),t._v(" "),a("p",[t._v("Great Tutorial: https://www.atlassian.com/git/tutorials/setting-up-a-repository")]),t._v(" "),a("p",[a("strong",[t._v("origin")]),t._v(" is an alias on your system for a particular remote repository. It's not actually a property of that repository.")]),t._v(" "),a("p",[t._v("By doing: "),a("code",[t._v("git push origin branchname")])]),t._v(" "),a("p",[t._v("We're pushing to "),a("strong",[t._v("origin")]),t._v(" repository, which is an alias to URL of the repository. In the push command, we can use remotes or we can simply use a URL directly. An example that uses the URL:\n"),a("code",[t._v("git push git@github.com:user/branchname.git branchname")])]),t._v(" "),a("h1",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations","aria-hidden":"true"}},[t._v("#")]),t._v(" Basic Operations")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git://example.com/myproject             "),a("span",{attrs:{class:"token comment"}},[t._v('# Clone existing "myproject" repository')]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" myproject\n\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" status                                        "),a("span",{attrs:{class:"token comment"}},[t._v("# Shows status for tracked/modified/untracked files")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("branch"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("                             "),a("span",{attrs:{class:"token comment"}},[t._v("# Switch to a different branch")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("branch-name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("                     "),a("span",{attrs:{class:"token comment"}},[t._v("# Create new branch and switch to it")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" branch                                        "),a("span",{attrs:{class:"token comment"}},[t._v("# List local branches for repository")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a                                     "),a("span",{attrs:{class:"token comment"}},[t._v("# List all branches for repository (including remote)")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("branch-name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("                       "),a("span",{attrs:{class:"token comment"}},[t._v("# Delete local branch")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("branch-name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add * or "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" add "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("some_file"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("                  "),a("span",{attrs:{class:"token comment"}},[t._v("# Add all/single file to be tracked by Git")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -am "),a("span",{attrs:{class:"token string"}},[t._v('"Add first draft of some feature"')]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("# Commit changes with a custom message")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("branch-name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("                     "),a("span",{attrs:{class:"token comment"}},[t._v("# Push changes upstream (Github, Gitlab, BitBucket etc.)")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v                                     "),a("span",{attrs:{class:"token comment"}},[t._v("# Display URLs referring to origin alias")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" remote set-url origin git@github.com:someuser/newprojectname.git "),a("span",{attrs:{class:"token comment"}},[t._v("# Set new URL for remote")]),t._v("\n")])])]),a("h2",{attrs:{id:"git-pull"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-pull","aria-hidden":"true"}},[t._v("#")]),t._v(" git pull")]),t._v(" "),a("p",[t._v("Merge upstream changes into your local repository.")]),t._v(" "),a("p",[a("em",[t._v("Usage:")]),t._v(" "),a("code",[t._v("git pull origin")])]),t._v(" "),a("p",[t._v("Fetch the specified remote’s copy of the current branch and immediately merge it into the local copy. This is the same as:\n"),a("code",[t._v("git fetch <remote>")]),t._v(" followed by "),a("code",[t._v("git merge origin/<current-branch>")])]),t._v(" "),a("p",[t._v("The "),a("strong",[t._v("--rebase")]),t._v(' option can be used to ensure a linear history by preventing unnecessary merge commits. Many developers prefer rebasing over merging, since it’s like saying, "I want to put my changes on top of what everybody else has done."\n'),a("code",[t._v("git pull --rebase origin <branch-name>")])]),t._v(" "),a("p",[a("em",[t._v("Example:")]),t._v("\nThe following example demonstrates how to synchronize with the central repository's master branch:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("branch-name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("        "),a("span",{attrs:{class:"token comment"}},[t._v("# Switch to a new branch")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" pull --rebase origin          "),a("span",{attrs:{class:"token comment"}},[t._v("# Merge upstream changes from origin into current <branch-name> (using rebase)")]),t._v("\n")])])]),a("p",[t._v("This simply moves your local changes onto the top of what everybody else has already contributed.")]),t._v(" "),a("h2",{attrs:{id:"interactive-rebase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interactive-rebase","aria-hidden":"true"}},[t._v("#")]),t._v(" interactive rebase")]),t._v(" "),a("p",[a("em",[t._v("Don't rebase public history")]),t._v("\nyou should never rebase commits once they've been pushed to a public repository. The rebase would replace the old commits with new ones and it would look like that part of your project history abruptly vanished.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("some-branch"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i HEAD~3              "),a("span",{attrs:{class:"token comment"}},[t._v("# Allows sqashing commits in the last three commits in current branch")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("some-branch"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("       "),a("span",{attrs:{class:"token comment"}},[t._v("# Interactive rebase in current branch")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -am "),a("span",{attrs:{class:"token string"}},[t._v('"Big Commit"')]),t._v("       "),a("span",{attrs:{class:"token comment"}},[t._v("# Commit changes after squashing smaller commits")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("some-branch"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("     "),a("span",{attrs:{class:"token comment"}},[t._v("# Push changes upstream")]),t._v("\n")])])]),a("h2",{attrs:{id:"git-push"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-push","aria-hidden":"true"}},[t._v("#")]),t._v(" git push")]),t._v(" "),a("p",[t._v("Pushing is how you transfer commits from your local repository to a remote repo.")]),t._v(" "),a("p",[a("em",[t._v("Usage:")]),t._v(" "),a("code",[t._v("git push <remote> <branch>")])]),t._v(" "),a("p",[a("em",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("branch-name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("# make changes to code")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("branch-name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("     "),a("span",{attrs:{class:"token comment"}},[t._v("# Push changes upstream")]),t._v("\n")])])]),a("h2",{attrs:{id:"git-merge"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-merge","aria-hidden":"true"}},[t._v("#")]),t._v(" git merge")]),t._v(" "),a("p",[a("strong",[t._v("git merge")]),t._v(" will combine multiple sequences of commits into one unified history. In the most frequent use cases, git merge is used to combine two branches.")]),t._v(" "),a("p",[a("em",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" status                        "),a("span",{attrs:{class:"token comment"}},[t._v("# Check that current branch is the receiving branch")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("receiving-branch"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("# If needed switch to receiving branch")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin                   "),a("span",{attrs:{class:"token comment"}},[t._v("# Pull latest upstream changes")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("branch-name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("           "),a("span",{attrs:{class:"token comment"}},[t._v("# Merge <branch-name> into current branch which is <receiving-branch>")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("branch-name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("       "),a("span",{attrs:{class:"token comment"}},[t._v("# Delete the branch after merging")]),t._v("\n")])])]),a("h2",{attrs:{id:"git-log-diff"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-log-diff","aria-hidden":"true"}},[t._v("#")]),t._v(" git log & diff")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" shortlog                                "),a("span",{attrs:{class:"token comment"}},[t._v("# Quick summary of commits sorted by author")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" log --graph --oneline --decorate        "),a("span",{attrs:{class:"token comment"}},[t._v("# Nice graph showing commits")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" log --author"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Bartek Gola"')]),t._v("              "),a("span",{attrs:{class:"token comment"}},[t._v("# View commits by author")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# DIFF")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("diff")]),t._v(" develop master -- myfile.cs        "),a("span",{attrs:{class:"token comment"}},[t._v("# Compare myfile.cs between develop and master")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("diff")]),t._v(" HEAD                               "),a("span",{attrs:{class:"token comment"}},[t._v("# Changes since last commit")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("other-branch"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("                     "),a("span",{attrs:{class:"token comment"}},[t._v("# Difference between two branches")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("diff")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("branch-name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" origin/"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("branch-name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# Difference between local and remote origin")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("diff")]),t._v(" --summary "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("branch-name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("            "),a("span",{attrs:{class:"token comment"}},[t._v("# Summary of changes since last commit against some branch")]),t._v("\n")])])]),a("h2",{attrs:{id:"git-stash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-stash","aria-hidden":"true"}},[t._v("#")]),t._v(" git stash")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" stash                         "),a("span",{attrs:{class:"token comment"}},[t._v("# Takes modified tracked files and staged changes and saves it...")]),t._v("\n                                  "),a("span",{attrs:{class:"token comment"}},[t._v("# ... on a stack of unfinished changes that you can reapply at any time")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" stash list                    "),a("span",{attrs:{class:"token comment"}},[t._v("# To see stored stashes")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" stash show                    "),a("span",{attrs:{class:"token comment"}},[t._v("# Show which files have stashed changes (most recent)")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" stash -p                      "),a("span",{attrs:{class:"token comment"}},[t._v("# Show actual changes to the stashed files")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply                   "),a("span",{attrs:{class:"token comment"}},[t._v("# Apply stashed changes back to the files")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" stash drop                    "),a("span",{attrs:{class:"token comment"}},[t._v("# Drop the stash")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop                     "),a("span",{attrs:{class:"token comment"}},[t._v("# Apply stashed changes and immediately drop the stash")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" stash branch                  "),a("span",{attrs:{class:"token comment"}},[t._v("# Create a branch from the stashed changes/files")]),t._v("\n")])])]),a("h1",{attrs:{id:"undoing-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#undoing-changes","aria-hidden":"true"}},[t._v("#")]),t._v(" Undoing changes")]),t._v(" "),a("p",[a("strong",[t._v("git reset")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD~1                      "),a("span",{attrs:{class:"token comment"}},[t._v("# Un-commit changes since last commit")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("# THIS WILL DELETE LOCAL FILES:")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch --all                       "),a("span",{attrs:{class:"token comment"}},[t._v("# Fetch all changes first")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard origin/"),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("branch_name"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("# Reset files to the one from the branch!")]),t._v("\n")])])]),a("h1",{attrs:{id:"advanced"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advanced","aria-hidden":"true"}},[t._v("#")]),t._v(" Advanced")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# Delete local branches that were pushed upstream:")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -r "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'{print "),a("span",{attrs:{class:"token variable"}},[t._v("$1")]),t._v("}'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("egrep")]),t._v(" -v -f /dev/fd/0 "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("git branch -vv "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("grep")]),t._v(" origin"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'{print "),a("span",{attrs:{class:"token variable"}},[t._v("$1")]),t._v("}'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("xargs")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d\n"),a("span",{attrs:{class:"token comment"}},[t._v("# Checkout single file from another branch into current one:")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("some-branch"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("another-branch"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" -- some_file.txt    "),a("span",{attrs:{class:"token comment"}},[t._v("# Copy some_file.txt from another-branch into current branch")]),t._v("\n")])])]),a("h2",{attrs:{id:"forking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forking","aria-hidden":"true"}},[t._v("#")]),t._v(" Forking")]),t._v(" "),a("p",[t._v("Keep your fork up to date with original:")]),t._v(" "),a("ol",[a("li",[t._v("Clone your fork:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@github.com:YOUR-USERNAME/YOUR-FORKED-REPO.git\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Add remote from original repository in your forked repository:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("cd")]),t._v(" into/cloned/fork-repo\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" remote add upstream git://github.com/ORIGINAL-DEV-USERNAME/REPO-YOU-FORKED-FROM.git\n"),a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch upstream\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("Updating your fork from original repo to keep up with their changes:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" pull upstream master\n")])])])])}],!1,null,null,null);e.options.__file="git.md";s.default=e.exports}}]);