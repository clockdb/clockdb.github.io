# Generated by Django 3.1.4 on 2021-04-10 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('φ', '0063_auto_20210409_1947'),
    ]

    operations = [
        migrations.RenameField(
            model_name='entity',
            old_name='phase63',
            new_name='phase71',
        ),
        migrations.RenameField(
            model_name='entity',
            old_name='phase64',
            new_name='phase72',
        ),
        migrations.AddField(
            model_name='entity',
            name='phase6',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='entity',
            name='phase73',
            field=models.IntegerField(default=0),
        ),
    ]
