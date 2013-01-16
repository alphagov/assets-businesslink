businesslink assets
===================

This repository contains archived assets from businesslink.gov.uk. 

These are not deployed directly from git, but instead taken from the copy 
stored on S3. If changes are made, they can be synchronised with S3 like so:

    s3cmd -c ~/.s3cfg sync --delete-removed assets/ s3://transition-assets/businesslink/
    s3cmd -c ~/.s3cfg sync --delete-removed improve_assets/ s3://transition-assets/improve/
    s3cmd -c ~/.s3cfg sync --delete-removed ukwelcomes_assets/ s3://transition-assets/ukwelcomes/

The s3 credentials are not stored in Github. Speak to a member of
ops or the Transition team to obtain them.
